document.addEventListener('DOMContentLoaded', () => {

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Fade-in animation on scroll using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// Contact Form Handler
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Su mensaje ha sido enviado correctamente. Nos pondremos en contacto a la brevedad.');
    form.reset();
  });
}

});
