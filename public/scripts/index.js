// Show an object on the screen.
function showObject(obj) {
  const pre = document.getElementById('response');
  const preParent = pre.parentElement;
  pre.innerText = JSON.stringify(obj, null, 4);
  preParent.classList.add('flashing');
  setTimeout(() => {
    preParent.classList.remove('flashing');
  }, 300);
}

function showResponse(response) {
  response.json().then(data => {
    showObject({
      data,
      status: response.status,
      statusText: response.statusText
    });
  });
}

/**
 * IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE ABOVE.
 * EDIT THE CODE BELOW TO SEND REQUESTS TO YOUR API.
 *
 * Native browser Fetch API documentation to fetch resources: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

// Map form (by id) to the function that should be called on submit
const formsAndHandlers = {
  'create-user': createUser,
  'delete-user': deleteUser,
  'change-username': changeUsername,
  'change-name': changeName,
  'change-password': changePassword,
  'sign-in': signIn,
  'sign-out': signOut,
  'view-all-users': viewAllUsers,
  'view-all-freets': viewAllFreets,
  'view-freets-by-author': viewFreetsByAuthor,
  'create-freet': createFreet,
  'edit-freet': editFreet,
  'delete-freet': deleteFreet,
  'view-all-followers': viewAllFollowers,
  'view-all-followers-by-username': viewAllFollowersByUsername,
  'add-follower': addFollower,
  'delete-follower': deleteFollower,
  'view-all-circles': viewAllCircles,
  'view-circle': viewCircle,
  'create-circle': createCircle,
  'delete-circle': deleteCircle,
  'add-circle-user': addCircleUser,
  'view-your-profile': viewYourProfile,
  'view-user-profile': viewUserProfile,
  'change-bio': editBio
};

// Attach handlers to forms
function init() {
  Object.entries(formsAndHandlers).forEach(([formID, handler]) => {
    const form = document.getElementById(formID);
    if (formID === 'create-circle-users') {
      const formData = new FormData(form);
      handler();
    } else {
      form.onsubmit = e => {
        e.preventDefault();
        const formData = new FormData(form);
        handler(Object.fromEntries(formData.entries()));
        return false; // Don't reload page
      };
    }
  });
}

// Attach handlers once DOM is ready
window.onload = init;
