//Email validation
let regex = /^[a-zA-Z0-9_%+-]+(?:\.[a-zA-Z0-9_%+-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/; //regex for emails
let email = document.querySelector('#email'); //assigns the content in the email box to email
let emailError = document.createElement('span');

emailError.id = 'email-error';
emailError.className = 'email-error';
emailError.setAttribute('role', 'alert');
emailError.hidden = true;
email.insertAdjacentElement('afterend', emailError);
email.setAttribute('aria-describedby', emailError.id);

function validateEmail(showEmpty = false) {
    let value = email.value.trim();
    let isValid = regex.test(value);
    let showError = !isValid && (showEmpty || value !== '');

    if (showError) {
        if (value === '') {
            emailError.textContent = 'Please enter an email address';
        } else {
            emailError.textContent = 'Invalid email address';
        }
    } else {
        emailError.textContent = '';
    }
    emailError.hidden = !showError;
    email.setAttribute('aria-invalid', showError);

    return isValid;
}

email.addEventListener('blur', function () { //blur makes it so it doesnt check before someone has used the box
    validateEmail(true);
});

email.addEventListener('input', function () {
    if (!emailError.hidden) {
        validateEmail(true);
    }
});

email.addEventListener('invalid', function (event) {
    event.preventDefault();
    validateEmail(true);
});

// //Phone validation
// let phoneRegex = /^\d{10}$/;
// let phone = document.querySelector('#phone');

// phone.addEventListener('blur', function () {
//     if (phone.value.trim() === '') {
//         return;
//     }

//     if (phoneRegex.test(phone.value.trim())) {
//         console.log("Valid phone number");
//     } else {
//         alert("Invalid phone number");
//     }
// });

// Form validation
let form = document.querySelector('.contact-form form');//Assigns the contact form to form

form.addEventListener('submit', function (event) { //listens for when the user clicks submit

    if (!validateEmail(true)) { // checks the email against the regex and prevents the submit if it doesnt comply with the regex
        event.preventDefault(); // prevents default(submitting with the button)
    }

    // if (!phoneRegex.test(phone.value.trim())) {
    //     event.preventDefault();
    // }

});