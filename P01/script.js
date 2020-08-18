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
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//this an event listener for the form on submit
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Field is empty!')
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'email is required!')
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'password is required!')
    } else {
        showSuccess(password);
    }
    if (cpassword.value === '') {
        showError(cpassword, "Field can't be left empty!")
    } else {
        showSuccess(cpassword);
    }
})