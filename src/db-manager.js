var jsonDb = require('node-json-db');
var path = require('path');
var Helper = require('./helper');


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
 * Gets the number of items in the storage
 * Adds the property if its not yet present
 * @returns {int} count
 */
function getEntryCount()
{
  var count = 1;
  try
  {
    count = db.getData(`/count`);
    count++;
  }
  catch (e)
  {
    dbLogger(`Error: [${e.id}] ${e.message}`);
    dbLogger("Action: Setting count to 1...");
    db.push(`/count`, 1);
  }
  finally
  {
    return count;
  }
}

/**
 * Updates the database with the provided parameters
 * @param {int} count
 * @param {object} data
 */
function update(count, data)
{
  // log
  dbLogger(`New entry (index:${count})`);
  // update
  db.push(`/count`, count, true);
  db.push(`/data[]`, data, true);
}

/**
 * Format a message to produce a normalized server log
 * @param {any} message
 */
function dbLogger(message)
{
  console.log(`${Helper.timeStamp()} |DB| ${message}`);
}