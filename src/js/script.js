// Header on scroll
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  lastScrollY = window.scrollY;
});

// Active Link Navbar In Current Page
// const currentPage = window.location.href;
// const navLinks = document.querySelectorAll(".nav__link");

// navLinks.forEach((link) => {
//   if (link.href === currentPage) {
//     link.setAttribute("aria-current", "page");
//   }
// });

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
