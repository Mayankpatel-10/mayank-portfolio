// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
      number: { value: 80 },
      color: { value: ['#6b46c1', '#48bb78'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
      }
  },
  interactivity: {
      detect_on: 'canvas',
      events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
      }
  }
});

// GSAP Animations
gsap.from(".hero-content", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".nav-link", {
  duration: 1,
  x: -50,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.7)"
});

// Scroll Animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  gsap.from(section, {
      scrollTrigger: {
          trigger: section,
          start: 'top center+=200',
          toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 100,
      duration: 1
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
