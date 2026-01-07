/* ===============================
   VIRALCRYPTOINSIGHTS ANIMATIONS
   Professional • Smooth • Modern
================================ */

/* --------- FADE-UP ON SCROLL --------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

/* Observe cards, sections, lists */
document.querySelectorAll(".card, .section, .list li").forEach((el) => {
  observer.observe(el);
});

/* --------- NAVBAR ACTIVE LINK --------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* --------- SMOOTH PAGE LOAD ANIMATION --------- */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.6s ease";
});

/* --------- BUTTON MICRO-INTERACTION --------- */
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      #22d3ee,
      #3b82f6
    )`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.background =
      "linear-gradient(90deg, #3b82f6, #22d3ee)";
  });
});
