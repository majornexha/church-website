document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const toggleBtn = document.getElementById('darkToggle');

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Dark mode toggle
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Remove preloader after page load
    window.onload = () => {
        const loader = document.getElementById('preloader');
        loader.style.display = 'none';
    };
});
