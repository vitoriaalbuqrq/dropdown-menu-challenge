const menuToggle = document.querySelector(".menuToggle");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");

menuToggle.onclick = function () {
  header.classList.toggle("active");
  overlay.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
    const parentLinks = document.querySelectorAll(".parent-links");

    parentLinks.forEach((link) => {
      link.addEventListener("click", function () {
        link.classList.toggle("active");
      });
    });
});