//menu
let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
let mijnLinks = document.querySelectorAll("a");

function toonMenu() {
	nav.classList.remove("onzichtbaar");
}

menu.addEventListener("click", toonMenu);

function verbergMenu() {
	nav.classList.add("onzichtbaar");
}

mainGedeelte.addEventListener("click", verbergMenu);


//dark en light modus
let darkLink = document.querySelector("#dark");
let lightLink = document.querySelector("#light");
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijlPortfolio.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijlPortfolioDark.css");
}

lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
