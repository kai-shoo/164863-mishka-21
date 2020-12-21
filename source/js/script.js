"use strict";

const btnToggle = document.querySelector(".main-nav__toggle");
const menus = document.querySelectorAll(".main-nav__list");

const priceField = document.querySelectorAll(".price");

menus.forEach((list) => list.classList.add("main-nav__list--hidden"));
btnToggle.classList.remove("main-nav__toggle--nojs");

btnToggle.addEventListener("click", function (e) {
  e.preventDefault();

  btnToggle.classList.toggle("main-nav__toggle--active");
  menus.forEach((list) => list.classList.toggle("main-nav__list--hidden"));
});

// format numbers

const formatPrice = function (price) {
  const words = price.textContent.split(" ");
  words.forEach((word, i) => {
    if (!isNaN(parseInt(word))) {
      words.splice(i, 1, new Intl.NumberFormat("ru-RU").format(word));
    }
  });

  price.textContent = words.join(" ");
};

priceField.forEach((field) => {
  formatPrice(field);
});
