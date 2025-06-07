document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
// Fetch Verse of the Day
fetch("https://beta.ourmanna.com/api/v1/get/?format=text")
    .then(res => res.text())
    .then(verse => {
        document.getElementById("verse-text").innerText = verse;
    })
    .catch(() => {
        document.getElementById("verse-text").innerText = "Be still, and know that I am God. — Psalm 46:10";
    });
