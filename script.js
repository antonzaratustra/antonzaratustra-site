document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const body = document.body;
    let isDarkTheme = true; // Changed to true for dark theme by default
    let currentLang = 'en'; // Default language

    // Set initial theme to dark theme
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️'; // Sun icon for light theme (since we're starting in dark mode)

    // Function to switch language
    function switchLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-en], [data-ru]').forEach(function(el) {
            el.textContent = el.dataset[lang];
        });
        languageToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    }

    // Function to toggle theme with icon update
    function toggleTheme() {
        if (isDarkTheme) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.textContent = '🌙'; // Moon icon for dark theme
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.textContent = '☀️'; // Sun icon for light theme
        }
        isDarkTheme = !isDarkTheme;
    }

    themeToggle.addEventListener('click', toggleTheme);

    languageToggle.addEventListener('click', function() {
        switchLanguage(currentLang === 'en' ? 'ru' : 'en');
    });

    // Initial language setup
    switchLanguage('en');
});