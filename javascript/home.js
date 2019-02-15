window.addEventListener('load', function() {
    document.querySelector("#name").innerHTML = localStorage.getItem('name');
});