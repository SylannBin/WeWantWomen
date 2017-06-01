var Helper = require('../src/helper');
var DbManager = require('../src/db-manager');

/**
 * Route used when sending a formulaire
 *
 * @route /formulaire
 *
 * @body {string} formResponse.userGenre
 * @body {jsonString} formResponse.content
 */
module.exports = function(req, res)
{
  Helper.appLogger(`New form response`);

  // Check existence of important data
  if (!req.body
    || !req.body.formResponse
    || !req.body.formResponse.content
    || !req.body.formResponse.userGenre)
  {
    Helper.appLogger(`Error: Invalid form`);
    res.status(403).json({ message: "Formulaire manquant ou invalide" });
    return;
  }

  // get number of entries
  var count = DbManager.getEntryCount();

  // Encapsulate data under store format
  var data = {
    when: Helper.timeStamp(),
    genre: req.body.formResponse.userGenre,
    content: req.body.formResponse.content
  };

  // update database
  DbManager.update(count, data);
  res.status(200).json({ message: "Réponse prise en compte !" });
}
