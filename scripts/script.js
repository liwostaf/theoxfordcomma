function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menuBtn');
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
    });
});
