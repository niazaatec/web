/* ================= MOBILE MENU TOGGLE ================= */
function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

/* ===== WELCOME MESSAGE ===== */
function welcome() {
  alert("Welcome to Niazaa Technology!");
}

/* ===== RESPONSIVE MENU TOGGLE ===== */
function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
// Toggle mobile menu
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Welcome button
function welcome() {
  alert("Welcome to Niazaa Technology!");
}

// Optional: reset animation on window resize
window.addEventListener('resize', () => {
  const slider = document.querySelector('.client-slider');
  slider.style.animation = 'none';
  void slider.offsetWidth; // trigger reflow
  slider.style.animation = 'slideLeft 20s linear infinite';
});

const modal = document.getElementById("serviceModal");
const modalBody = document.getElementById("modal-body");


// about us
const aboutReveals = document.querySelectorAll('#about .reveal');

function revealAboutSection() {
  aboutReveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealAboutSection);
revealAboutSection();

// why
// Scroll reveal animation
// ================= REVEAL ANIMATION ON SCROLL =================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// contact us 
// Scroll animation
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// Button click opens Microsoft Form
document.getElementById("contactBtn").addEventListener("click", function () {
  window.open(
    "https://forms.office.com/r/p5nPnQbN48?origin=lprLink",
    "_blank"
  );
});

// Run on load


reveal();


// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
