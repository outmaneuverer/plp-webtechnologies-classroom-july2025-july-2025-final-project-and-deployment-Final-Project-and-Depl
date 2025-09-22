// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    products.forEach(product => {
      if (category === 'all' || product.getAttribute('data-category') === category) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  });
});
