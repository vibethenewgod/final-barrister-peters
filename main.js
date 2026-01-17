// Header Hide/Show on Scroll (disabled on mobile)
const header = document.getElementById('header');
let lastScrollY = 0;
let scrollDirection = 'down';
let scrollTimeout;

// Check if device is mobile
const isMobile = () => window.innerWidth <= 768;

window.addEventListener('scroll', () => {
    // Skip scroll behavior on mobile
    if (isMobile()) return;
    
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
        header.classList.add('header-hidden');
    } else {
        scrollDirection = 'up';
        header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        lastScrollY = currentScrollY;
    }, 150);
}, { passive: true });

// Insights Carousel Scroll
const insightsCarousel = document.getElementById('insightsCarousel');
const insightsCarouselNext = document.getElementById('insightsCarouselNext');
const insightsCarouselPrev = document.getElementById('insightsCarouselPrev');
const insightsScrollDistance = 260;

function updateInsightsPrevVisibility() {
    if (!insightsCarousel || !insightsCarouselPrev) return;
    const threshold = 12;
    if (insightsCarousel.scrollLeft > threshold) {
        insightsCarouselPrev.classList.add('visible');
    } else {
        insightsCarouselPrev.classList.remove('visible');
    }
}

if (insightsCarousel && insightsCarouselNext) {
    insightsCarouselNext.addEventListener('click', function() {
        insightsCarousel.scrollBy({ left: insightsScrollDistance, behavior: 'smooth' });
        setTimeout(updateInsightsPrevVisibility, 200);
    });
}
if (insightsCarousel && insightsCarouselPrev) {
    insightsCarouselPrev.addEventListener('click', function() {
        insightsCarousel.scrollBy({ left: -insightsScrollDistance, behavior: 'smooth' });
        setTimeout(updateInsightsPrevVisibility, 200);
    });
}
if (insightsCarousel) {
    insightsCarousel.addEventListener('scroll', updateInsightsPrevVisibility, { passive: true });
    updateInsightsPrevVisibility();
}
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const dropdowns = document.querySelectorAll('.mobile-nav .dropdown > a');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownContent = dropdown.nextElementSibling;

        dropdownContent.classList.toggle('open');
        
        if (!dropdownContent.classList.contains('open')) {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});


// const hamburger = document.querySelector('.hamburger');
// const mobileNav = document.querySelector('.mobile-nav');

// hamburger.addEventListener('click', () => {
//     mobileNav.classList.toggle('open');
// });


// let lastScrollY = window.scrollY;
        
// window.addEventListener('scroll', function() {
//     const header = document.getElementById('header');
    
//     if (window.scrollY > lastScrollY) {
//         header.style.transform = 'translateY(-100%)'; 
//     } else {
//         header.style.transform = 'translateY(0)'; 
//     }
    
//     lastScrollY = window.scrollY;
// });


// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.title = 'Back to top';
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});