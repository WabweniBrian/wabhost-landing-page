// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [backToTopBtn, navBar, navBarToggleIcon, loader] = [
  qs(".back-to-top-btn"),
  qs(".navbar"),
  qs(".navbar-toggle-icon"),
];

// -----------------------------------------------------NAVBAR ----------------------------------------------------
navBarToggleIcon.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
  navBar.classList.toggle("animate-slideIn", window.scrollY > 0);
});

// -----------------------------------BACK TO TOP BUTTONS ----------------------------------------------------

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("active", window.scrollY > 500);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// Back to top button
backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Swiper Slider
var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  slidesPerView: 3,
  spaceBetween: 100,
  nextButton: ".next",
  prevButton: ".prev",
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
