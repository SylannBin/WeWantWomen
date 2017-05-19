var Helper = require('../Helper');


module.exports = IndexAction;


/**
 * Default route
 *
 * @route /
 */
function IndexAction(req, res)
{
  Helper.appLogger(`New connection`);
  res.status(200).json({ message: "We Want Women!\n" });
}

