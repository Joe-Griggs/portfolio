//Email validation
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex for emails
let email = document.querySelector('#email'); //assigns the content in the email box to email

email.addEventListener('blur', function () { //blur makes it so it doesnt check before someone has used the box
    if (email.value.trim() === '') { //trims the spaces off the ends if there are any
        return;
    }

    if (regex.test(email.value.trim())) { //compares the regex to the returned trimmed email
        console.log('Valid email address');
    } else {
        alert('Invalid email address');
    }
});


//Phone validation
let phoneRegex = /^\d{10}$/;
let phone = document.querySelector('#phone');

phone.addEventListener('blur', function () {
    if (phone.value.trim() === '') {
        return;
    }

    if (phoneRegex.test(phone.value.trim())) {
        console.log("Valid phone number");
    } else {
        alert("Invalid phone number");
    }
});

// Form validation
let form = document.querySelector('.contact-form');//Assigns the contact form to form

form.addEventListener('submit', function (event) { //listens for when the user clicks submit

    if (!regex.test(email.value.trim())) { // checks the email against the regex and prevents the submit if it doesnt comply with the regex
        event.preventDefault(); // prevents default(submitting with the button)
    }

    if (!phoneRegex.test(phone.value.trim())) {
        event.preventDefault();
    }

});