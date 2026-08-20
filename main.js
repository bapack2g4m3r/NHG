import './style.css';

// Configurable WhatsApp Number
const WHATSAPP_NUMBER = "6281284416840";
const WHATSAPP_MESSAGE = "Halo Tim NHG, saya ingin berkonsultasi mengenai layanan Anda.";

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Header Scroll Effect (Glassmorphism trigger)
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Scroll Animations (Intersection Observer)
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

  document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
  });

  // Update WhatsApp Links dynamically
  const waLinks = document.querySelectorAll('.whatsapp-link');
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  waLinks.forEach(link => {
    if (link.tagName === 'A') {
      link.href = waUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
