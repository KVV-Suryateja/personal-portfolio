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
// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    contactForm.reset();
});