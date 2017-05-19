// Set cssType for survey module
Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.defaultBootstrapCss.radioButton = "form-control";
console.log(Survey.defaultBootstrapCss);
// Content of the form (set by json functions)
// (Has to be named like this to be found by the Survey module!)
var survey;

// Container for users's answers
var surveyData = {};

// Content of the canvas for the statistics
var chartCanvas;

// Indicates the type of formulaire (corresponds to the page)
// has to be one of [employment, formation, it-commons]
var category;

// Init button events
$("#employment-form").on('click', function () { generateForm(getEmploymentJson); category = "employment"; });
$("#formation-form" ).on('click', function () { generateForm(getFormationJson);  category = "formation"; });
$("#it-commons-form").on('click', function () { generateForm(getITCommonsJson);  category = "it-commons"; });
$("#chart-form"     ).on('click', function () { generateChart(); });

// Navigation
$(".nav li").on("click", function ()
{
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});
