import closeImage from "../assets/images/icon-menu-close.svg";
import openImage from "../assets/images/icon-menu.svg";
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger-menu");
const close =document.querySelector("#close");
const navLinks = document.querySelectorAll(".nav-list > li");
const main = document.querySelector("main");



burger.addEventListener("click", function () {
    nav.classList.toggle("responsive");
    if (nav.className.includes("responsive")) {
        close.src=closeImage;
        document.body.classList.add("shade");
    } else {
        close.src= openImage;
        document.body.classList.remove("shade");
    }
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation="";
        } else {
            link.style.animation =`animateNavLinks 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
});

// burger.addEventListener("click", function () {
//     nav.classList.toggle("responsive");
//     if (nav.className.includes("responsive")) {
//         navLinks.forEach((li, index) => {
//             console.log("hello");
//             li.style.animation =`animateNavLinks 0.5s ease forwards ${index/5+0.3}s`;
//         });
//         close.src=closeImage;
//     } else {
//         close.src= openImage;
//         li.style.animation="";
//     }
// });
