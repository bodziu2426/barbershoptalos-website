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

    const SLIDE_DURATION = 6000;
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

    requestAnimationFrame(() => requestAnimationFrame(() => {
        showSlide(0);
        startTimer();
    }));
})();


// ── REVIEWS SLIDER ───────────────────────────
(function initReviewsSlider() {
    const slides = document.querySelectorAll('.review-slide');
    const dots   = document.querySelectorAll('.review-dot');

    if (!slides.length || !dots.length) return;

    let current = 0;
    let animating = false;
    let timer = null;

    function showSlide(nextIndex) {
        if (nextIndex === current || animating) return;
        animating = true;

        const direction = nextIndex > current ? 1 : -1;
        const outgoing  = slides[current];
        const incoming  = slides[nextIndex];

        // Snap incoming to its starting off-screen position (no transition)
        incoming.style.transition = 'none';
        incoming.style.transform  = `translateX(${direction * 100}%)`;
        incoming.style.opacity    = '0';

        // Force reflow so browser registers the starting position
        void incoming.offsetWidth;

        // Slide incoming in from the side
        incoming.style.transition = 'transform 0.52s ease, opacity 0.52s ease';
        incoming.style.transform  = 'translateX(0)';
        incoming.style.opacity    = '1';
        incoming.classList.add('active');

        // Slide outgoing out to the opposite side
        outgoing.style.transition = 'transform 0.52s ease, opacity 0.52s ease';
        outgoing.style.transform  = `translateX(${direction * -100}%)`;
        outgoing.style.opacity    = '0';

        // Update dots immediately
        dots.forEach(d => d.classList.remove('active'));
        dots[nextIndex].classList.add('active');
        current = nextIndex;

        // Clean up after animation finishes
        setTimeout(() => {
            outgoing.classList.remove('active');
            outgoing.style.transition = '';
            outgoing.style.transform  = '';
            outgoing.style.opacity    = '';
            incoming.style.transition = '';
            animating = false;
        }, 520);
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
