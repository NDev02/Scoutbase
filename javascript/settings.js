window.addEventListener('load', function() {
    document.querySelector('#theme-select').selectedIndex = localStorage.getItem('theme-index');
});

function themeChanged() {
    localStorage.setItem('theme-location', event.target.value);
    localStorage.setItem('theme-index', event.target.selectedIndex);
    applyTheme(event.target.value, true);
}