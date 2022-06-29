
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
const links =  document.querySelectorAll(".menu a");

hamburger.onclick = toggleMenu;

links.forEach((element) => {
    element.onclick = toggleMenu;
});

function toggleMenu() {
    menu.classList.toggle ("active-burger");
    hamburger.classList.toggle ("hamburger-open");
}