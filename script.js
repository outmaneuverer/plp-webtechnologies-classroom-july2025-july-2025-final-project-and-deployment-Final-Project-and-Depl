// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    navMenu.classList.remove('active');
  });
});

// Animate stats on scroll
const animateStats = () => {
  const stats = document.querySelectorAll('.stat-item h3');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalNumber = target.textContent.replace('+', '');
        let current = 0;
        const increment = finalNumber.includes('%') ? 1 : Math.ceil(finalNumber / 50);

        const updateNumber = () => {
          if (current < finalNumber.replace('%', '')) {
            current += increment;
            if (current > finalNumber.replace('%', '')) {
              current = finalNumber.replace('%', '');
            }
            target.textContent = current + (finalNumber.includes('%') ? '%' : (finalNumber.includes('+') ? '+' : ''));
            setTimeout(updateNumber, 30);
          }
        };
        updateNumber();
        observer.unobserve(target);
      }
    });
  });

  stats.forEach(stat => observer.observe(stat));
};

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  animateStats();
});

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});
