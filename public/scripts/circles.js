/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllCircles(fields) {
  fetch('/api/circles')
    .then(showResponse)
    .catch(showResponse);
}

function viewCircle(fields) {
  fetch(`/api/circles?name=${fields.circle_name}`)
    .then(showResponse)
    .catch(showResponse);
}

function createCircle(fields) {
  fetch('/api/circles', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteCircle(fields) {
  fetch(`/api/circles/${fields.circle_name}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function addCircleUser(fields) {
  fetch(`/api/circles/${fields.circle_name}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
