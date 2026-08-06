// Button Event and DOM Manipulation

const changeTextBtn = document.getElementById("changeTextBtn");
const heroText = document.getElementById("hero-text");

changeTextBtn.addEventListener("click", function () {
    heroText.textContent = "Welcome to my personal portfolio!";
});


// Scroll to Top

const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});