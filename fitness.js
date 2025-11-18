// ===== Sticky Navbar =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// ===== Smooth Scroll =====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
// ===== Mobile Menu =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
// ===== Hero Fade In =====
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
});
// ===== Counter Animation =====
const counters = document.querySelectorAll(".count");
let started = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".stats");
  if (window.scrollY + window.innerHeight >= section.offsetTop && !started) {
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = 20;

      let update = setInterval(() => {
        if (count < target) {
          count++;
          counter.textContent = count + "+";
        } else {
          clearInterval(update);
        }
      }, speed);
    });
    started = true;
  }
});
