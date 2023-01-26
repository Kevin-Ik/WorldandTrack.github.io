const nav = document.querySelector("nav");
const navBar = document.querySelector(".navBar");
const menu = document.querySelector(".menu");
const bar = document.querySelector(".bar");
const footer = document.querySelector("footer");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
  bar.classList.toggle("active");
  navBar.classList.toggle("slide-top");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = "0";
  }
});
