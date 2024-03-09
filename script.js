document.addEventListener('DOMContentLoaded', function() {
    // Image Click Navigation
    var clickableImages = document.querySelectorAll('.clickable-image');
    clickableImages.forEach(function(image) {
        image.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-url');
        });
    });

    // Hamburger Menu Toggle
    var hamburger = document.querySelector('.navbar-links');
    if (hamburger) { // Check if the hamburger menu exists on the page
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    // Form Submission Feedback (for demonstration)
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) { // Check if the contact form exists on the page
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission
            alert('Thank you for contacting us!');
        });
    }

    // Simple Slideshow Functionality
    var slideshow = document.querySelector('#slideshow .slide-wrapper');
    if (slideshow) { // Check if the slideshow exists on the page
        var slides = slideshow.children;
        var currentIndex = 0;
        setInterval(function() {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = 'block';
        }, 3000); // Change slide every 3 seconds
    }
});
