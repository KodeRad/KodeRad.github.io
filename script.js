"use strict";

/* alert(
  "Site still in progress. Come back in a couple of days to see what's changed! 😃"
); */

// Selectors:

// Setions:
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const section4 = document.querySelector("#section--4");

// Navbars:
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const footer = document.querySelector(".footer");
const footerLinks = document.querySelector(".footer__nav__list");
const menus = document.querySelectorAll(".menu");

// Others selectors:
const allElements = document.querySelector("*");

const scrollDownImg = document.querySelector(".scroll__img");

// Navbars

// Smooth Scrolling:
const smoothScrollHandler = function (e, target) {
  e.preventDefault();
  if (e.target.classList.contains(`${target}`)) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

// Top navbar
navLinks.addEventListener("click", (e) => {
  smoothScrollHandler(e, "nav__link");
});

// Bottom navbar
footerLinks.addEventListener("click", (e) => {
  smoothScrollHandler(e, "footer__link");
});

// Menu fade out animation:

const fadeOutHandler = function (e, opacity) {
  if (
    e.target.classList.contains("nav__link") ||
    e.target.classList.contains("footer__link")
  ) {
    // select (logo, siblings)
    const others = document.querySelectorAll(".fade__out");

    others.forEach((other) => {
      if (other !== e.target) {
        other.style.opacity = opacity;
      }
    });
  }
};

menus.forEach((menu) => {
  menu.addEventListener("mouseover", function (e) {
    fadeOutHandler(e, 0.5);
  });
  menu.addEventListener("mouseout", function (e) {
    fadeOutHandler(e, 1);
  });
});

// Sticky Navigation:

const stickyNav = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      scrollDownImg.style.opacity = 0;
    }
    if (entry.isIntersecting) {
      nav.classList.remove("sticky");
      scrollDownImg.style.opacity = 1;
    }
  });
};

const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.2,
  // TODO: Calculate rootMargin dynamically using .getBoundClientRect()
  rootMargin: "30px",
});
section1Observer.observe(section1);

// Reveling sections
// 1. section observer
// 2. for each section reveal current section

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionAllObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
});

/* allSections.forEach((section) => {
  sectionAllObserver.observe(section);
  section.classList.add("section--hidden");
});
 */

// Project slider

const slides = document.querySelectorAll(".slide");

const bttnLeft = document.querySelector(".slider__btn--left");
const bttnRight = document.querySelector(".slider__btn--right");

/* slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
}); */

const sliderHelper = function (side, e) {
  e.preventDefault();

  if (!e.target.classList.contains("slider__btn")) return;

  if (e.target.classList.contains(`slider__btn--${side}`)) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${
        side === "left" ? 100 * (i - 1) : 100 * (i + 1)
      }%)`;
    });
    console.log(`${side}`);
  }
};

bttnLeft.addEventListener("click", function (e) {
  sliderHelper("left", e);
});
bttnRight.addEventListener("click", function (e) {
  sliderHelper("right", e);
});

// Toggl API Clock

/* API: f4d69d308e97e4bf700051591f16876f
TOGGL: Content-Type: application/json  */

/* const apiToken = "f4d69d308e97e4bf700051591f16876f";

async function getTimeLearning(apiToken) {
  const response = await fetch("https://api.track.toggl.com/api/v9/me/cors", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${apiToken}:api_token`)}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data.data;
}

getTimeLearning(apiToken);
 */
