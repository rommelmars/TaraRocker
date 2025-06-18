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

    // Intersection Observer for news announcements
    const newsAnnouncements = document.querySelector(".news-announcements");

    const newsObserver = new IntersectionObserver(
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

    newsObserver.observe(newsAnnouncements);

    // Directly add transition effect to author details on page load
    const authorDetails = document.querySelector(".author-details");
    setTimeout(() => {
        authorDetails.classList.add("visible");
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600,   // Keep animations smooth
        offset: 10,      // Avoid animations triggering too early
        debounceDelay: 50, // Optimize resize handling
        throttleDelay: 0,  // Optimize scroll handling
        mirror: true, 
        once: false,     // Allow animations to trigger multiple times
    });

});