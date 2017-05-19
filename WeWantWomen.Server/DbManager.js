var jsonDb = require('node-json-db');
var path = require('path');
var Helper = require('./Helper');


module.exports = {
  getDatabase: getDatabase,
  getEntryCount: getEntryCount,
  update: update
}


// Init DB accessor
var db = getDatabase();

/**
 * Retrive the proper json storage file as a new database
 * @param {string} fileName
 */
function getDatabase(fileName)
{
  // Default fileName
  if (!fileName)
    fileName = "generated-"+Helper.dateStamp();
  
  // Database configuration
  var databasePath = path.resolve(__dirname, '../AnswerStorage', fileName);
  var saveOnPush = true;
  var humanReadableJson = true;

  dbLogger(`Loading database file: ${databasePath}`);
  return new jsonDb(databasePath, saveOnPush, humanReadableJson);
}

/**
 * Gets the number of items in the category storage
 * Adds the property to the category if its not yet present
 * @param {string} category
 * @returns {int} count
 */
function getEntryCount(category)
{
  var count = 0;
  try
  {
    count = db.getData(`/${category}/count`);
    count++;
  }
  catch (e)
  {
    dbLogger(`Error: [${e.id}] ${e.message}`);
    dbLogger("Action: Setting count to 0...");
    db.push(`/${category}/count`, 0);
  }
  finally
  {
    return count;
  }
}

/**
 * Updates the database with the provided parameters
 * @param {string} category
 * @param {int} count
 * @param {object} data
 */
function update(category, count, data)
{
  // log
  dbLogger(`New entry in ${category} (index:${count})`);
  // update
  db.push(`/${category}/count`, count, true);
  db.push(`/${category}/data[]`, data, true);
}

/**
 * Format a message to produce a normalized server log
 * @param {any} message
 */
function dbLogger(message)
{
  console.log(`${Helper.timeStamp()} |DB| ${message}`);
}