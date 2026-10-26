//Email validation
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = document.querySelector('#email');

if (regex.test(email)) {
    console.log("Valid email address");
} else {
    alert("Invalid email address");
}

//Phone validation
let phoneRegex = /^\d{10}$/;
let phone = document.querySelector('#');

if (phoneRegex.test(phone)) {
    console.log("Valid phone number");
} else {
    alert("Invalid phone number");
}