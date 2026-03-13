document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            // Close all other items
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.display = 'none';
            });

            // Toggle current item
            content.style.display = isOpen ? 'none' : 'block';
        });
    });

    // Appointment form handling
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cererea dumneavoastră a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp.');
            appointmentForm.reset();
        });
    }

    // Set active link in nav
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
