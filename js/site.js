// script.js
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.real-estate-web');
    sections.forEach(section => {
        const speed = 0.5; // Adjust the speed of the parallax effect
        const offset = window.scrollY * speed;
        section.style.setProperty('--parallax-offset', `${-offset}px`);
    });
});
