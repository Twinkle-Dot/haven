"use strict";

const navBar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links");
const date = document.querySelector(".date");
const card = document.querySelector(".card");
const cardList = document.querySelector(".card-list");
const btnLearn = document.querySelector(".learn-btn");
const hamIcon = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".hamburger-menu");

navBar.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  if (!e.target.classList.contains("nav-link")) return;

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

card.addEventListener("click", function () {
  cardList.classList.remove("hidden");
});

btnLearn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#workshop").scrollIntoView({ behavior: "smooth" });
});

hamIcon.addEventListener("click", function () {
  hamIcon.classList.toggle("open");
  hamMenu.classList.toggle("clicked");
});

date.textContent = new Date().getFullYear();
