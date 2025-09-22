// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Accordion FAQ
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");

    // Change "+" to "-" when open
    const sign = header.querySelector("span");
    if (content.classList.contains("active")) {
      sign.textContent = "−";
    } else {
      sign.textContent = "+";
    }
  });
});
