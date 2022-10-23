/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllStudio(fields) {
  fetch(`/api/studio?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewStudio(fields) {
  fetch(`/api/studio?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createStudio(fields) {
  fetch(`/api/studio?freetId=${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function editStudio(fields) {
  fetch(`/api/studio?freetId=${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteStudio(fields) {
  fetch(`/api/studio?freetId=${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
