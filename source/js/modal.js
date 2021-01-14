"use strict";

const modalCart = document.querySelector(".modal--cart");
const cartButtons = document.querySelectorAll(".show-modal--cart");

const closeModal = function () {
  modalCart.classList.add("modal--hidden");
  document.body.style.overflow = "initial";
};

cartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    modalCart.classList.remove("modal--hidden");
    document.body.style.overflow = "hidden";
    initial;
  });
});

modalCart.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__window")) {
    e.preventDefault();

    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalCart.classList.contains(".modal-hidden")) {
    closeModal();
  }
});
