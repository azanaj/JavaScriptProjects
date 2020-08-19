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

// Function to show validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to check if required field have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value === '') {
            //console.log(input.id);
            showError(input, ' field is empty!') //add input.id + or ${input.id} 
        } else {
            showSuccess(input);
        }
    });
}

//function to check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, '')
    }
}
//function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAT(0).toUpperCase() + input.id.slice(1);
}

//this an event listener for the form on submit
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, cpassword]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
})