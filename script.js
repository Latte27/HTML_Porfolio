document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-right ul li a");
    const sections = document.querySelectorAll("section");

    // Function to remove active class from all links
    function removeActiveClasses() {
        links.forEach(link => link.classList.remove("active"));
    }

    // Smooth scrolling and active link update
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                
                const section = document.querySelector(this.getAttribute("href"));
                section.scrollIntoView({ behavior: "smooth" });

                removeActiveClasses();
                this.classList.add("active");
            }
        });
    });

    // Highlight active section while scrolling
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100; // Offset for better accuracy

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                const id = section.getAttribute("id");
                removeActiveClasses();
                document.querySelector(`.nav-right ul li a[href="#${id}"]`).classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");

    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run initially in case it's already in view
});

