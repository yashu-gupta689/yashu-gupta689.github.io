/* ============================================================
   YASHU GUPTA — PORTFOLIO JAVASCRIPT
   main.js

   SECTIONS INDEX:
   1. SCROLL REVEAL ANIMATION
   2. SKILL BAR ANIMATION
============================================================ */


/* ============================================================
   1. SCROLL REVEAL ANIMATION
   — Jab bhi page scroll karo, elements fadein hote hain
   — .reveal class wale elements observe karta hai
============================================================ */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));


/* ============================================================
   2. SKILL BAR ANIMATION
   — Skill section mein progress bars animate hoti hain
   — data-width attribute se width set hoti hai
   — Naya skill add karne ke liye HTML mein data-width="XX%" rakho
============================================================ */
const bars = document.querySelectorAll('.skill-bar-fill');
const bo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.getAttribute('data-width') || '70%';
      bo.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(b => bo.observe(b));
