import Typed from 'typed.js';


let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector("#menuicon");

menuIcon.onclick = () =>{

    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Click karne par remove karega hamere Icon ko */ 

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/* typed */

 const typed = new Typed('.multiple-text', {
     strings: ['Frontend Developer','Graphic Designer','Data Analysis'],
     typeSpeed: 100,
    backSpeed: 100,
    backDelay : 1000,
    loop: true

});


/* scroll reval */ 

ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.home-content, .heading',{origin: top});


