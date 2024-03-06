'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
});
}

/**
 * header & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () { 
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }

});

/**
 * search box
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");
const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i ++) {
    searchBoxElems[i].addEventListener("click", function () {
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}

/**
 * moving cycle
 */

const deliveryBoy = document.querySelector("[data-deliveryboy]");
let lastScrollPos = window.scrollY;
let deliveryBoyLeftPos = deliveryBoy.getBoundingClientRect().left;

window.addEventListener("scroll", function () {
    let scrollDistance = window.scrollY - lastScrollPos;
    let newLeftPos = deliveryBoyLeftPos + scrollDistance;
    let leftDisappearAmount = deliveryBoy.offsetWidth * (3 / 6);
    let rightDisappearAmount = deliveryBoy.offsetWidth * (1 / 6);
    let viewportWidth = window.innerWidth;
    let maxLeftPos = viewportWidth - deliveryBoy.offsetWidth + rightDisappearAmount;
    let minLeftPos = -leftDisappearAmount;
    newLeftPos = Math.max(newLeftPos, minLeftPos);
    newLeftPos = Math.min(newLeftPos, maxLeftPos);
    deliveryBoy.style.left = newLeftPos + "px";
    lastScrollPos = window.scrollY;
    deliveryBoyLeftPos = newLeftPos;
});






