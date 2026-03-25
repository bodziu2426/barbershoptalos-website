const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // prevents click from bubbling
    navMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {
        navMenu.classList.remove('open');
    }
})

// Scroll/fade animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); 
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

;
