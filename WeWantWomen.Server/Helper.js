module.exports = {
  timeStamp: getTimeStamp,
  dateStamp: getDateStamp,
  appLogger: appLogger
}


/**
 * Produce a normalized timestamp through the app
 * Format: "yyyy-MM-dd hh:mm:ss.sss"
 */
function getTimeStamp()
{
  return new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..*/, '');
}


/**
 * Produce a normalized datestamp through the app
 * Format: "yyyy-MM-dd"
 */
function getDateStamp()
{
  return new Date()
    .toISOString()
    .replace(/T.*/, '');
}


function appLogger(message)
{
  console.log(`${getTimeStamp()} |App| ${message}`);
}