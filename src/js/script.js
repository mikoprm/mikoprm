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
// document.querySelectorAll(".nav__link").forEach((link) => {
//   if (link.href === window.location.href) {
//     link.setAttribute("aria-current", "page");
//   }
// });

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav__link"); // Adjust selector as needed

navLinks.forEach((link) => {
  // Extract the path from the link's href
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add("active");
    // Optionally, for accessibility, you can also set aria-current
    link.setAttribute("aria-current", "page");
  }

  // Special handling for the homepage if its path is just '/' and others might be '/index.html'
  if (currentPath === "/" && linkPath === "/index.html") {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
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
