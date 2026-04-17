document.addEventListener("DOMContentLoaded", function () {

    // 1. Typing Effect for Name Header
    const text = " I am Ghibello Raquel";
    const typingElement = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);

            index++;
            setTimeout(typeWriter, 130);
        }
    }

    // Timing of tying effect
    setTimeout(typeWriter, 300);

    // 2. Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;// determines the top point of the element
            const elementVisible = 100; // determines at which point the element will be revealed

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Listen for scroll events
    window.addEventListener("scroll", reveal);

    reveal();
});




document.addEventListener("click", function (event) {
    // Check if element clicked is a btn
    if (event.target.tagName.toLowerCase() === "button") {
        const buttonId = event.target.id;

        //determines which btn is clicked
        switch (buttonId) {
            case "downloadbtn":
                const link = document.createElement("a");
                link.href = "resume.pdf";
                link.download = "resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            case "btn2":
                alert("You clicked Button 2");
                break;
            case "btn3":
                alert("You clicked Button 3");
                break;
            default:
                console.warn("Unknown button clicked:", buttonId);
        }
    }
});




//listens to submit action, then sends a success message.
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        Toastify({
            text: "Your message has been sent!",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            duration: 3000,
            gravity: "top",
            position: "right",
        }).showToast();
        contactForm.reset();
    });
}

