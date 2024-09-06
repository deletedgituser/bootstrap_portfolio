document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Hello there!", "Welcome to WR.Salaum.", "DYK? Cybersecurity is fun!", "Learning is a journey."]; // Array of phrases
    let index = 0; // Current word index
    let charIndex = 0; // Current character index in the word
    const speed = 100; // Typing speed (milliseconds per character)
    const pause = 1500; // Pause before deleting (milliseconds)
    const targetElement = document.getElementById("typewriter-text");

    function typeWriter() {
        if (charIndex < texts[index].length) {
            targetElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(deleteText, pause); // Wait before deleting the text
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            targetElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, speed);
        } else {
            index = (index + 1) % texts.length; // Move to the next word
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Start the typewriter effect
});

// JavaScript for toggling the menu
document.getElementById("hamburger-menu").addEventListener("click", function () {
    var navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.toggle("active");
});

