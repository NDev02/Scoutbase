window.addEventListener('load', function() {
    document.querySelector('#theme-select').selectedIndex = localStorage.getItem('theme-index');
    document.querySelector('#name').placeholder = localStorage.getItem('name') || "JohnDoe";
    document.querySelector('#team').placeholder = localStorage.getItem('team') || 0;
    document.querySelector('#event-code').placeholder = localStorage.getItem('event') || "";
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

function setEvent() {
    localStorage.setItem('event', event.target.value);
}

function testConnection() {
    Basecamp server = new Basecamp();
    server.test();
}
