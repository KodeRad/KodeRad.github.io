console.log("Hello World");

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
      console.log("sticky");
      nav.classList.add("sticky");
      scrollDownImg.style.opacity = 0;
    }
    if (entry.isIntersecting) {
      console.log("not sticky icky");
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

// scroll down fade out
// sticky nav fades in
