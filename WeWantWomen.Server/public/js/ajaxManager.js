/**
 * Sends the form with the user answers to the server
 *
 * @global {string} category
 * @global {jsonObject} survey
 * @global {string} userGenre
 */
function sendForm()
{
  // object to string (+format for server request)
  var body = JSON.stringify({
    formResponse: {
      category: category,
      userGenre: userGenre,
      content: surveyData
    }
  });


  // Executes ajax call
  $.ajax({
    type: "POST",
    url: "/formulaire",
    contentType: "application/json",
    dataType: "json",
    data: body,
    success: data => console.log("Success"),
    error: data => console.log("Error")
  });

}

function testForm()
{
  category = "it-commons";
  userGenre = "f";
  surveyData = {
    question1: "qeurghqpirhhpqi",
    question2: "qeurghqpirhhpqi",
    question3: "qeurghqpirhhpqi",
    question4: "qeurghqpirhhpqi",
    block: {
      check1: 1,
      check2: 0,
      check3: 1,
      check4: 1,
      check5: 0,
    }
  }
  // object to string (+format for server request)
  var body = JSON.stringify({
    formResponse: {
      category: category,
      userGenre: userGenre,
      content: surveyData
    }
  });


  // Executes ajax call
  $.ajax({
    type: "POST",
    url: "/formulaire",
    contentType: "application/json",
    dataType: "json",
    data: body,
    success: data => console.log("Success"),
    error: data => console.log("Error")
  });
}