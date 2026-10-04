// =========================================
// AAYUSH RIJAL — PORTFOLIO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aayush Rijal Portfolio loaded.");

    // Smooth navigation
    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});