// ── HAMBURGER MENU ───────────────────────────
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);
    if (!clickedInsideMenu && !clickedHamburger) {
        navMenu.classList.remove('open');
    }
});

// ── SCROLL REVEAL ────────────────────────────
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

// ── REVIEWS SLIDER ───────────────────────────
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');
let currentReview = 0;

function showReview(index) {
    reviews.forEach(r => r.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    reviews[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentReview = index;
        showReview(index);
    });
});

setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 5000);

// ── HERO SLIDER ──────────────────────────────
const heroSlides    = document.querySelectorAll('.hero-slide');
const heroTexts     = document.querySelectorAll('.hero-slide-text');
const heroDots      = document.querySelectorAll('.hero-dot');
const progressBar   = document.querySelector('.hero-progress-bar');

const SLIDE_DURATION = 5000; // ms per slide
let currentHeroSlide = 0;
let heroTimer = null;

function showHeroSlide(index) {
    // Remove active from all
    heroSlides.forEach(s => s.classList.remove('active'));
    heroTexts.forEach(t => t.classList.remove('active'));
    heroDots.forEach(d => d.classList.remove('active'));

    // Activate new slide
    heroSlides[index].classList.add('active');
    heroTexts[index].classList.add('active');
    heroDots[index].classList.add('active');

    // Reset & animate progress bar
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';

    // Small delay so the reset is rendered before animation starts
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            progressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
            progressBar.style.width = '100%';
        });
    });
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
}

function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHeroSlide, SLIDE_DURATION);
}

// Dot click — jump to slide
heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentHeroSlide = index;
        showHeroSlide(currentHeroSlide);
        startHeroTimer(); // reset timer on manual click
    });
});

// Kick everything off
showHeroSlide(0);
startHeroTimer();
