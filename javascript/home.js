window.addEventListener('load', function() {
    if(location.search != "") {
        let event = location.search.split("=")[1];
        localStorage.setItem('event', event);
    }
    if(localStorage.getItem('name') == null) {
        alert("You need to setup your profile first");
        location.href = "./settings.html";
    }
    document.querySelector("#name").innerHTML = localStorage.getItem('name');
});
