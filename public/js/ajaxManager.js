/**
 * Retrive the form from the server and continue with the result
 * @param {function} callback
 */
function getForm(callback)
{
    $.ajax({
    type: "GET",
    url: "/model",
    dataType: "json",
    success: data => callback(data),
    error: data => handleError(data)
  });
}

/**
 * Sends the form with the user answers to the server
 *
 * @global {jsonObject} survey
 * @global {string} userGenre
 */
function sendForm()
{
  // object to string (+format for server request)
  var body = JSON.stringify({
    formResponse: {
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
    success: data => handleSuccess(data),
    error: data => handleError(data)
  });
}

function handleSuccess(data)
{
  console.log("Success, data received: ", data)
}

function handleError(data)
{
  console.log("Error, data returned: ", data)
}