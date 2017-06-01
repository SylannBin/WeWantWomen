/**
 * Fill the survey-container with the proper form
 * based on getFormFunction parameter
 * @param {string} newModel json form obtained from the server
 */
function generateForm(newModel)
{
  // Remove everything from the container before reloading it
  $("#main-container").empty();

  // build the survey container
  $("#main-container").append('<div id="survey-container" class="col-lg-offset-3 col-lg-6"></div>');

  // Configure the survey
  survey = new Survey.Model(newModel);
  survey.locale = "fr";
  survey.onComplete.add(sender => surveyData = sender.data);

  // Init Form container element
  $("#survey-container").Survey({
    model: survey,
    onCurrentPageChanged: changePage,
    onComplete: endSurvey
  });
}