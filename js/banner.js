//JavaScript for banner section of portfolio
let i = 0; //counter
const bannerTxt = document.querySelector('.name h1'); //Heading text
const text = bannerTxt.textContent;

bannerTxt.textContent = ''; //clear the display text

function typeEffect() {
    if (i < text.length) {//move over each letter
        bannerTxt.textContent += text.charAt(i);//add one letter from the text to the now clear heading text
        i++;//add to counter
        setTimeout(typeEffect, 100);//delay
    }
}

typeEffect();


// Hamburger pop out

const button = document.querySelector('#nav-toggle');
const nav = document.querySelector('.side-nav');
const close = document.querySelector('#close-nav');

button.addEventListener('change', function() {
    nav.classList.toggle('is-open', button.checked);
});

close.addEventListener('click', function() {
    button.checked = false;
    nav.classList.remove('is-open');
});


//Close when clicked off side nav
document.addEventListener('click', function(event) {//listens to see if the click was on the side nav
    if (!nav.contains(event.target) && !button.contains(event.target)) {//making sure it wasnt the nav or the button
        button.checked = false;
        nav.classList.remove('is-open');
    }
});

//contact close
const contact = document.querySelector('#contact');

contact.addEventListener('click', function() {
    button.checked = false;
    nav.classList.remove('is-open');
});