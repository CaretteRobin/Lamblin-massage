document.addEventListener('DOMContentLoaded', function() {

    // === Animation au scroll (Fade-in) ===
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Active l’animation quand 20% de l’élément est visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Évite de re-checker les éléments déjà apparus
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // === Menu Responsive ===
    const menuToggle = document.querySelector('.menu-toggle'); // Remplacer navbar-brand par un vrai bouton
    const navbarMenu = document.querySelector('.navbar-menu');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            menuToggle.classList.toggle('open'); // Change l'apparence du bouton burger
        });

        // Ferme le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
                navbarMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    } else {
        console.warn("MenuToggle ou navbarMenu introuvable !");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Lightbox pour la galerie
    const lightboxImages = document.querySelectorAll(".gallery a");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    lightboxImages.forEach(image => {
        image.addEventListener("click", e => {
            e.preventDefault();
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.href;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Effet de scroll en douceur
    document.querySelector(".scroll-indicator").addEventListener("click", function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".header-sticky");

    window.addEventListener("scroll", function () {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll vers le bas → cacher le menu
            navbar.style.top = "-80px";
        } else {
            // Scroll vers le haut → afficher le menu
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });
});
