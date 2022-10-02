"use strict";

// learn more -> scroll to top section
const more = document.querySelector(".more");
const intro = document.querySelector(".intro");

more.addEventListener("click", function () {
  intro.scrollIntoView({ behavior: "smooth" });
});
