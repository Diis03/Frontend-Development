//Javascript

var hamburgerButton = document.querySelector("header img:first-of-type");

function menuAnimatie() {
    var hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("menuopen");
}

hamburgerButton.addEventListener("click", menuAnimatie);