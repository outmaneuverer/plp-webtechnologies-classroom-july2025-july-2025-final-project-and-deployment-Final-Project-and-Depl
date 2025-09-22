// Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.toggle('active');
        });

        // FAQ Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isActive = content.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                
                document.querySelectorAll('.accordion-header span').forEach(icon => {
                    icon.textContent = '+';
                });
                
                // Open clicked item if it wasn't already active
                if (!isActive) {
                    content.classList.add('active');
                    this.querySelector('span').textContent = '-';
                }
            });
        });