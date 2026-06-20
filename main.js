document.addEventListener('DOMContentLoaded', () => {
    // Hero load animation
    setTimeout(() => {
        document.querySelector('.hero').classList.add('loaded');
    }, 100);

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu on link click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.click();
            }
        });
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
    
    const textRevealElements = document.querySelectorAll('.text-reveal');
    textRevealElements.forEach(el => {
        // Wrap text reveal content in spans if not already
        if (!el.hasAttribute('data-wrapped')) {
            const content = el.innerHTML;
            // Only observe, the visible class handles CSS transform
            el.setAttribute('data-wrapped', 'true');
            observer.observe(el);
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
});

// Language Switcher Logic
function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    
    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = lang.toUpperCase();
    }
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('preferredLang') || 'sl';
    setLanguage(currentLang);
    
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Gallery Carousel Logic
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button--right');
        const prevButton = document.querySelector('.carousel-button--left');
        
        let currentIndex = 0;
        const slideInterval = 3000; // 3 seconds auto slide
        let timer;
        
        function moveToSlide(index) {
            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }
            
            track.style.transform = 'translateX(-' + (index * 100) + '%)';
            currentIndex = index;
        }
        
        function startTimer() {
            timer = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, slideInterval);
        }
        
        function resetTimer() {
            clearInterval(timer);
            startTimer();
        }
        
        if (nextButton && prevButton) {
            nextButton.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
                resetTimer();
            });
            
            prevButton.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
                resetTimer();
            });
        }
        
        startTimer();
    }
});
