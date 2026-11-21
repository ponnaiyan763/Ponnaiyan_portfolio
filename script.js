
// Animated typing text
const typingText = document.getElementById("typingText");

const roles = [
    "Java Developer",
    "Technical Trainer",
    "Software Professional"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1300);
            return;
        }
    } else {
        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, deleting ? 45 : 100);
}

typeRole();


// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Reveal sections while scrolling
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    observer.observe(element);
});


// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
