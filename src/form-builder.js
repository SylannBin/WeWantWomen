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
    showProgressBar: "top",
    goNextPageAutomatic: true,
    showNavigationButtons: true,
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
      employment.getEmployment1(),
      employment.getEmployment2(),
      employment.getEmployment3(),
      employment.getEmployment4(),
      employment.getEmployment5(),
      employment.getEmployment6(),
      employment.getEmployment7(),
      employment.getEmployment8(),
      employment.getEmployment9(),
      formation.getFormation1(),
      formation.getFormation2(),
      formation.getFormation3(),
      formation.getFormation4(),
      formation.getFormation5(),
      formation.getFormation6(),
      formation.getFormation7(),
      formation.getFormation8(),
      formation.getFormation9(),
      women.getWomen1(),
      women.getWomen2(),
      women.getWomen3(),
      women.getWomen4(),
      women.getWomen5(),
      women.getWomen6(),
      women.getWomen7(),
      women.getWomen8(),
    ],
    completedHtml: "<div id='report-container'><h3>Merci d'avoir renseigné ce questionnaire !</h3><div id='report-stats'></div></div>"
  }
};

