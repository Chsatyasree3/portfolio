document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".content-section");
  const skillCards = document.querySelectorAll(".skill-card");
  const projectCards = document.querySelectorAll(".project-card");
  const contactCards = document.querySelectorAll(".contact-card");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
      navMenu.classList.remove("show");
    });
  });

  // Reveal animation
  const revealElements = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    [...sections, ...skillCards, ...projectCards, ...contactCards].forEach(
      (el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          setTimeout(() => el.classList.add("visible"), i * 120);
        }
      }
    );
  };
  window.addEventListener("scroll", revealElements);
  revealElements();

  // Active nav highlight
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const secTop = sec.offsetTop - 120;
      if (pageYOffset >= secTop) current = sec.getAttribute("id");
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`)
        link.classList.add("active");
    });
  });

  // Hamburger
  hamburger.addEventListener("click", () => navMenu.classList.toggle("show"));

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "☀️"
      : "🌙";
  });
});