var Helper = require('../Helper');
var DbManager = require('../DbManager');


module.exports = PostFormulaireAction;


/**
 * Route used when sending a formulaire
 *
 * @route /formulaire
 *
 * @body {string} formResponse.category
 * @body {jsonString} formResponse.content
 */
function PostFormulaireAction(req, res)
{
  Helper.appLogger(`New ${req.body.formResponse.category} Form`);
  // Check existence of important data
  if (!req.body
    || !req.body.formResponse
    || !req.body.formResponse.category
    || !req.body.formResponse.content)
  {
    Helper.appLogger(`Error: Invalid form`);
    res.status(403).json({ message: "Formulaire manquant ou invalide" });
    return;
  }

  // category of the response among [employment, formation and it-commons]
  var category = req.body.formResponse.category;

  // get number of entries for this category
  var count = DbManager.getEntryCount(category);

  // Encapsulate data under store format
  var data = {
    when: Helper.timeStamp(),
    content: req.body.formResponse.content
  };

  // update database
  DbManager.update(category, count, data);
  res.status(200).json({ message: "Réponse prise en compte !" });
}
