document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.content-section');
    
    const revealSection = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Optional: re-hide if scrolling up
            }
        });
    };
    
    window.addEventListener('scroll', revealSection);
    
    // Initial check in case sections are already in view
    revealSection();

});