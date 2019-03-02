window.addEventListener('load', function() {
    if(localStorage.getItem('name') == null) {
        alert("You need to setup your profile first");
        location.href = "./settings.html";
    }
    document.querySelector("#name").innerHTML = localStorage.getItem('name');
});