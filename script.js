document.addEventListener("DOMContentLoaded", function() {
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
});