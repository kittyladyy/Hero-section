const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        themeCheckbox.checked = false;
    } else {
        body.classList.remove('dark-mode');
        themeCheckbox.checked = true; 
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme === 'dark');

themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});