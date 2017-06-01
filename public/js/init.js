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
 * Starts the survey, initializes the logic of a complete survey
 * @param {string} genre (possible values: "m", "f", "n"")
 */
function startSurvey(genre)
{
  // TODO?: Start timer
  userGenre = genre;
  getForm(generateForm);
  initScrollEffect();
}

/**
 * Logic to execute when page switch event is fired
 */
function changePage()
{
  initScrollEffect();
}

/**
 * Logic to execute when form is finished
 */
function endSurvey()
{
  sendForm()
  // TODO?: End timer (see startSurvey) + display time
  // TODO: display comparison between user answers and actual answers (specific questions only)
}