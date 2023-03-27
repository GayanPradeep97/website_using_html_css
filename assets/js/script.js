'use strict';

// element toggle function

const elemToggleFunc = function (elem){
    elem.classList.toggle('active');
}

// navbar toggle

const navbar =document.querySelector('[data-navbar]');
const overlay =document.querySelector('[data-ovrlay]');
const navCloseBtn =document.querySelector('[data-nav-close-btn]');
const navOpenBtn =document.querySelector('[data-nav-opn-btn]');
const navbarLinks =document.querySelector('[data-nav-link]');

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

//   close navbar when click on any navbar link

for (let i=0; i < navbarLinks.length; i++){
    navElemArr.push(navbarLinks[i]);
}

// added event on all elments for toggling navbar

for (let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}


/* Header Active status */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    this.window.scroll > 400 ? header.classList.add("active")
    : header.classList.remove("active");
})

