document.addEventListener("DOMContentLoaded", function () {
    const logoText = document.getElementById("logo-text");
    logoText.style.opacity = 0;
    logoText.style.color = "transparent";
    logoText.style.transform = "scale(0.3)";
    logoText.style.transition = "opacity 1s, color 2s, transform 1s";

    setTimeout(() => {
        logoText.style.opacity = 1;
        logoText.style.color = "white";
        logoText.style.transform = "scale(1)";
    }, 100);


    // Toggle navigation menu on hamburger menu click
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("nav");

    hamburgerMenu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Intersection Observer for scroll animations
    const bookInfos = document.querySelectorAll(".book-info");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the element is visible
        }
    );

    bookInfos.forEach((bookInfo) => {
        observer.observe(bookInfo);
    });
});

const bookContainers = document.querySelectorAll(".book-container");

const bookObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the element is visible
    }
);

bookContainers.forEach((bookContainer) => {
    bookObserver.observe(bookContainer);
});