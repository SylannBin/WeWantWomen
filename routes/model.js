var Helper = require('../src/helper');
var jsonBuilder = require('../src/form-builder');

/**
 * Sends the json model to the client
 *
 * @route /model
 */
module.exports = function(req, res)
{
  Helper.appLogger(`Send new form model`);
  res.status(200).json(jsonBuilder());
}

