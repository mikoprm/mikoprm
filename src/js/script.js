// Header on scroll
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }
  lastScrollY = window.scrollY;
});

// Mobile Navigation
const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Footer year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();

// Project Tabs
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
