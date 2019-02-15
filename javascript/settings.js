window.addEventListener('load', function() {
    document.querySelector('#theme-select').selectedIndex = localStorage.getItem('theme-index');
    document.querySelector('#name').value = localStorage.getItem('name') || "JohnDoe";
    document.querySelector('#team').value = localStorage.getItem('team') || 0;
});

function themeChanged() {
    localStorage.setItem('theme-location', event.target.value);
    localStorage.setItem('theme-index', event.target.selectedIndex);
    applyTheme(event.target.value, true);
}

function setName() {
    localStorage.setItem('name', event.target.value);
}

function setTeam() {
    localStorage.setItem('team', event.target.value);
}