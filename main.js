'use strict';

/*--- Make navbar transparent when it is on the top ---*/
// get navbar with query selector
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

/*--- Scroll by click ---*/
// get navbar menu elements with query selector
const navbarMenu = document.querySelector('.navbar__menu');
// register event for the navbar menu: run defined function by click
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

/*--- Scroll to contact section when clicking on the contact-me button ---*/
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({behavior: "smooth"});
})

/*--- Make home slowly fade to transparent as the window scrolls down ---*/
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1-window.scrollY / homeHeight;
})

/*--- Show arrow up button when scrolling down ---*/
document.addEventListener('scroll', () => {
    // if(window.scrollY)
})