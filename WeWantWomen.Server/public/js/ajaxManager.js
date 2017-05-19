﻿/**
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
      genre: userGenre,
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