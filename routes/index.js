var Helper = require('../src/helper');

/**
 * Default route
 *
 * @route /
 */
module.exports = function(req, res)
{
  Helper.appLogger(`New connection`);
  res.status(200).json({ message: "We Want Women!\n" });
}

