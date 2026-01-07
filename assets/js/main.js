// ---------------------------
// ScrollReveal Animations
// ---------------------------
ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false
});

// Hero Section Animations
ScrollReveal().reveal('.hero h1', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.hero p', { origin: 'bottom', interval: 400 });
ScrollReveal().reveal('.hero-buttons', { origin: 'bottom', interval: 600 });

// Section Titles
ScrollReveal().reveal('.section-title', { origin: 'left', interval: 200 });

// Feature Cards
ScrollReveal().reveal('.card', { origin: 'bottom', interval: 200 });

// Early Access Form
ScrollReveal().reveal('.early-access h2', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.early-access form', { origin: 'bottom', interval: 400 });

// ---------------------------
// Navbar Shadow on Scroll
// ---------------------------
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 15px rgba(0, 229, 255, 0.3)';
    navbar.style.transition = '0.3s ease';
  } else {
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
  }
});

// ---------------------------
// Hero Background Animation (subtle moving lines)
// ---------------------------
const hero = document.querySelector('.hero');

let offset = 0;

function animateHeroBg() {
  offset += 0.5;
  hero.style.background = `linear-gradient(135deg, #0f111a ${offset}%, #111622)`;
  requestAnimationFrame(animateHeroBg);
}

animateHeroBg();

// ---------------------------
// Button Hover Glow (Extra Enhancement)
// ---------------------------
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 15px #00E5FF';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});
