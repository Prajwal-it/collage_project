let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[currentSlide].style.display = "block";
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);