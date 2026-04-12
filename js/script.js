// ── HAMBURGER MENU ───────────────────────────
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation();
        navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('open');
        }
    });
}

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

// ── HERO SLIDER ──────────────────────────────
(function initHeroSlider() {
    const heroSlides  = document.querySelectorAll('.hero-slide');
    const heroTexts   = document.querySelectorAll('.hero-slide-text');
    const heroDots    = document.querySelectorAll('.hero-dot');
    const progressBar = document.querySelector('.hero-progress-bar');

    if (!heroSlides.length || !progressBar) return;

    const SLIDE_DURATION = 5000;
    let current = 0;
    let timer = null;

    function showSlide(index) {
        heroSlides.forEach(s => s.classList.remove('active'));
        heroTexts.forEach(t => t.classList.remove('active'));
        heroDots.forEach(d => d.classList.remove('active'));
        heroSlides[index].classList.add('active');
        heroTexts[index].classList.add('active');
        heroDots[index].classList.add('active');
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            progressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
            progressBar.style.width = '100%';
        }));
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            current = (current + 1) % heroSlides.length;
            showSlide(current);
        }, SLIDE_DURATION);
    }

    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            current = index;
            showSlide(current);
            startTimer();
        });
    });

    showSlide(0);
    startTimer();
})();


// ── REVIEWS SLIDER ───────────────────────────
(function initReviewsSlider() {
    const slides = document.querySelectorAll('.review-slide');
    const dots   = document.querySelectorAll('.review-dot');

    if (!slides.length || !dots.length) return;

    let current = 0;
    let timer = null;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            showSlide((current + 1) % slides.length);
        }, 5000);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startTimer();
        });
    });

    showSlide(0);
    startTimer();
})();

// ── SCROLL TO TOP ────────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── GALLERY LIGHTBOX ─────────────────────────
(function initLightbox() {
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxImg || !lightboxClose) return;

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
})();
