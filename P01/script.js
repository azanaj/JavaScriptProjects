/*
-Document object model (dom) 
node 
document
      doctype
      html*/

//-we can use var, let or const

// All functions
// Function to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}


//this an event listener for the form on submit
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === '') {}
})
