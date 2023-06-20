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
const allSections = document.querySelectorAll(".section");

// Navbars:
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const footer = document.querySelector(".footer");
const footerLinks = document.querySelector(".footer__nav__list");
const menus = document.querySelectorAll(".menu");

// Others selectors:
const allElements = document.querySelector("*");
const scrollDownImg = document.querySelector(".scroll__img");
const dotContainer = document.querySelector(".dots");

// Navbars

const navbarBehaviour = function () {
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
};

///////////////////////////////////
// Sticky Navigation:

const stickyNavFunction = function () {
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
};

///////////////////////////////////
// Sections reveal
// 0. hide sections
// 1. section observer
// 2. for each section reveal current section

const sectionsReveal = function () {
  allSections.forEach((section) => {
    section.classList.add("section--hidden");
  });
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
  allSections.forEach((section) => {
    sectionAllObserver.observe(section);
  });
};

///////////////////////////////////
// Project slider

const slider = function () {
  const slides = document.querySelectorAll(".project");
  const bttnLeft = document.querySelector(".slider__btn--left");
  const bttnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // Dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  createDots();

  const activeDot = function () {
    slides.forEach((slide) => {
      if (slide.style.transform === "translateX(0%)") {
        const slideNumber = slide.classList.value.slice(-1);

        document.querySelectorAll(".dots__dot").forEach((dot) => {
          if (dot.dataset.slide === `${slideNumber - 1}`) {
            dot.classList.add("dot__active");
          } else dot.classList.remove("dot__active");
        });
      }
    });
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      // slide 0: 0%, 100%, 200%
      s.style.transform = `translateX(${100 * (slide + i)}%)`;
      activeDot();
    });
  };

  goToSlide(curSlide);

  const nextSlide = function () {
    if (curSlide === maxSlide * -1) {
      curSlide = 0;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide * -1;
    } else curSlide++;
    goToSlide(curSlide);
  };

  bttnLeft.addEventListener("click", prevSlide);
  bttnRight.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    e.preventDefault();
    // matching strategy
    if (!e.target.classList.contains("dots__dot")) return;

    curSlide = e.target.dataset.slide * -1;

    goToSlide(curSlide);
  });
};

///////////////////

// TogglAPI / Simple clock
/* const togglAPI = function () {

  // Toggl API Clock

  const apiToken = "f4d69d308e97e4bf700051591f16876f";

  async function getTimeLearning(apiToken) {
    const response = await fetch(
      "https://api.track.toggl.com/api/v9/time_entries",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${apiToken}:api_token`)}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  }

  getTimeLearning(apiToken);
}; */

///////////////////////////////////

// Chuck Norris
const chuckAPI = async function () {
  const url = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(url);
    const result = await response.json();
    const joke = result.value;
    document.querySelector(".joke").textContent = `"${joke}"`;
    return result.value;
  } catch (error) {
    console.error(error);
  }
};

document.querySelector(".btn__joke").addEventListener("click", function (e) {
  e.preventDefault();
  chuckAPI();
});

function handleLargeScreen() {
  navbarBehaviour();
  stickyNavFunction();
  sectionsReveal();
  slider();
  chuckAPI();
  /*   togglAPI(); */
}

function handleSmallScreen() {
  //sectionsReveal();
  slider();
  chuckAPI();
  /* togglAPI(); */
}

// Check screen size on page load and resize
function checkScreenSize() {
  if (window.innerWidth <= 1000) {
    handleSmallScreen();
  } else {
    handleLargeScreen();
  }
}

// Call checkScreenSize on page load
window.addEventListener("load", checkScreenSize);

// Call checkScreenSize on window resize
window.addEventListener("resize", checkScreenSize);
