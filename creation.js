// Constante Barre de Navigation
const nav = document.querySelector("nav");
const navBar = document.querySelector(".navBar");
const menu = document.querySelector(".menu");
const bar = document.querySelector(".bar");

// Constante Creation de compte Particulier et Proffessionnel
const part = document.querySelector(".part");
const pro = document.querySelector(".pro");
const btnPart = document.querySelector(".btn-part");
const btnPro = document.querySelector(".btn-pro");

// Code Java Script Barre de Navigation ----------------
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
  bar.classList.toggle("active");
  navBar.classList.toggle("slide-top");
});

// Fin du code Barre de Navigation
// -------------------------------------------------------

btnPro.addEventListener("click", () => {
  pro.style.display = "block";
  part.style.display = "none";
  btnPart.style.background = "black";
  btnPart.style.color = "white";
  btnPro.style.background = "rgba(255, 255, 255, 0.573)";
  btnPro.style.color = "black";
});

btnPart.addEventListener("click", () => {
  pro.style.display = "none";
  part.style.display = "block";
  btnPart.style.background = "rgba(255, 255, 255, 0.573)";
  btnPart.style.color = "black";
  btnPro.style.background = "black";
  btnPro.style.color = "white";
});
