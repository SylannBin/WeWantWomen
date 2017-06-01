// Set cssType for survey module
Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";

// Content of the form (set by json functions)
// (Has to be named like this to be found by the Survey module!)
var survey;

// Container for users's answers
var surveyData = {};

// Indicates the genre of the user
var userGenre;

// Init button events
$("#select-genre-m").on('click', function () { startSurvey("m") });
$("#select-genre-f").on('click', function () { startSurvey("f") });
$("#select-genre-n").on('click', function () { startSurvey("n") });

// Functions

/**
 * 
 * @param {string} genre (possible values: "m", "f", "n"")
 */
function startSurvey(genre)
{
  userGenre = genre;
  generateForm();
  initScrollEffect();
}