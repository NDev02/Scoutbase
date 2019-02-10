
if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
} else {
    navigator.serviceWorker.register('pwabuilder-sw.js', {
        scope: './'
    }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
    });
}

window.addEventListener('load', e => {
    toggleConfigurer();
    formConfigurer();
});


function formConfigurer() {
    for (let form of document.querySelectorAll("form")) {
        form.onsubmit = (event) => {
            event.preventDefault();
        }
    }
}

function toggleConfigurer() {
    let toggles = document.querySelectorAll('.toggle');

    function icon(hasTitle) {
        let i = document.createElement('i');
        i.className = "material-icons vis-toggle";
        i.innerHTML = 'visibility';
        i.setAttribute('show', true)
        i.onclick = function () {
            let nowShow = this.getAttribute('show');
            if (nowShow == 'true') {
                i.innerHTML = 'visibility_off';
                this.setAttribute('show', false);
                let children;
                if (hasTitle)
                    children = i.parentElement.parentElement.children;
                else
                    children = i.parentElement.children;
                for (let child of children) {
                    if (child.className.indexOf('toggle') == -1 && child.className.indexOf('keep') == -1)
                        child.hidden = false;
                }
            }
            else {
                i.innerHTML = 'visibility';
                this.setAttribute('show', true);
                let children;
                if (hasTitle)
                    children = i.parentElement.parentElement.children;
                else
                    children = i.parentElement.children;
                for (let child of children) {
                    if (child.className.indexOf('toggle') == -1 && child.className.indexOf('keep') == -1)
                        child.hidden = true;
                }
            }
        }
        return i;
    }

    for (let toggle of toggles) {
        let placedChanger = false;
        let children = toggle.children;
        for (let child of children) {
            if (child.className.indexOf('keep') != -1) {
                child.appendChild(icon(true));
                placedChanger = true;
            }
            if (child.className.indexOf('toggle') == -1 && child.className.indexOf('keep') == -1)
                child.hidden = true;
        }
        if (!placedChanger)
            toggle.appendChild(icon());
    }
}
