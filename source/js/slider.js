"use strict";

const slider = document.querySelector(".slider__list");
const slides = document.querySelectorAll(".slider__item");
const maxSlide = slides.length;
let curSlide = 0;

const btnPrevSlide = document.querySelector(".slider__control--previous");
const btnNextSlide = document.querySelector(".slider__control--next");

slides.forEach((item) => item.classList.add("slider__item--js"));
slider.classList.add("slider__list--js");

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${130 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

goToSlide(0);

btnNextSlide.addEventListener("click", nextSlide);
btnPrevSlide.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
