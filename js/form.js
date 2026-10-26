//Email validation
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = document.querySelector('#email');

email.addEventListener('blur', function () {
    if (email.value.trim() === '') {
        return;
    }

    if (regex.test(email.value.trim())) {
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