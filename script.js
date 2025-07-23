// Mobil menü működése
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Hamburger menü kattintás esemény
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Menü elemek kattintásakor bezárjuk a mobil menüt
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
});

// Egér követő effekt
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('body::before');
    // CSS változók beállítása az egér pozíciójához
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});

// CSS változók inicializálása
document.documentElement.style.setProperty('--mouse-x', '0px');
document.documentElement.style.setProperty('--mouse-y', '0px');

// Egér követő effekt CSS-ben való megjelenítéshez
const style = document.createElement('style');
style.textContent = `
    body::before {
        left: var(--mouse-x, 0px);
        top: var(--mouse-y, 0px);
    }
`;
document.head.appendChild(style);

// Smooth scroll a navigációs linkekhez
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar háttér változtatása görgetéskor
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(74, 144, 164, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(74, 144, 164, 0.1)';
    }
});

// Animációk megjelenéskor (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elemek megfigyelése animációhoz
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.benefit-card, .feature-item, section h2');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CTA gomb kattintás esemény
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Itt lehet hozzáadni a kapcsolatfelvételi funkciót
            alert('Köszönjük az érdeklődését! Hamarosan felvesszük Önnel a kapcsolatot.');
        });
    }
});

// Víz hullám effekt interaktivitás
document.addEventListener('mousemove', function(e) {
    const waves = document.querySelectorAll('.wave');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    waves.forEach((wave, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * 20 * speed;
        const y = mouseY * 10 * speed;
        
        wave.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Képek lazy loading (ha később képeket adunk hozzá)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}