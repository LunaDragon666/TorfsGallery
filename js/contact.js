const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const letter = document.querySelector("#letter");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    // if all inputs pass validation enable the button
    if (checkLength(firstName.value, 1) && checkLength(letter.value, 24) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        // clear the message
        message.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
letter.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    // display a message once the form has been submitted
    message.innerHTML = '<div class="message">Your message has been sent successfully!</div>';
    // clear all input values
    form.reset();
}

form.addEventListener("submit", submitForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

   // Back to top of the contact form after it pass or fail to submit it 
   function theTop() {
    window.scrollTo(0, 0);
}