/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllFollowers(fields) {
  fetch('/api/followers')
    .then(showResponse)
    .catch(showResponse);
}

function viewAllFollowersByUsername(fields) {
  fetch(`/api/followers?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function addFollower(fields) {
  fetch('/api/followers', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFollower(fields) {
  fetch('/api/followers', {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

