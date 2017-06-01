const itCommons = require('./form-categories/it-commons');
const employment = require('./form-categories/employment');
const formation = require('./form-categories/formation');
const women = require('./form-categories/women');

/**
 * Returns the json object containing the form questions and answers
 */
module.exports = function () {
  return {
    questionTitleTemplate: "{title}",
    pages: [
      itCommons.getItCommons1(),
      itCommons.getItCommons2(),
      itCommons.getItCommons3(),
      itCommons.getItCommons3(),
      itCommons.getItCommons4(),
      itCommons.getItCommons5(),
      itCommons.getItCommons6(),
      itCommons.getItCommons7(),
      itCommons.getItCommons8(),
      itCommons.getItCommons9(),
      employment.getEmployment(),
      formation.getFormation(),
      women.getWomen()
    ]
  }
};

