document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // This prevents the form from actually submitting
    alert('Thank you for your message! The form is not fully functional yet, but you can contact Zahraddeen directly at zahraddeenzakariyya20@gmail.com.');
});

// Mobile navbar toggle
const menuIcon = document.getElementById('mobile-menu-icon');
const navLinks = document.getElementById('navbar-links');
if(menuIcon && navLinks) {
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
}