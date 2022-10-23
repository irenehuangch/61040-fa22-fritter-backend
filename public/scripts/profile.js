/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewYourProfile(fields) {
  fetch('/api/profile')
    .then(showResponse)
    .catch(showResponse);
}

function viewUserProfile(fields) {
  fetch(`/api/profile?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function editBio(fields) {
  fetch('/api/profile', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
