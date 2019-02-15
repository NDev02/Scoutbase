window.addEventListener('load', (w, e) => {
    if (localStorage.getItem('theme-location'))
        applyTheme(localStorage.getItem('theme-location'), true);
    else {
        for (let themekit of document.querySelectorAll("link[rel~=themekit]")) {
            fetch(themekit.href).then(res => res.text()).then(text => { _gotKit(text); });
        }
    }
});

function _gotKit(raw) {
    for (let line of raw.split("\n")) {
        if (line.indexOf('//') != -1) {
            let lookfor = line.substring(line.indexOf('//'));
            line = line.replace(lookfor, "");
        }
        if (line.indexOf(';') != -1) {
            let ref = line.substring(0, line.indexOf(":"));
            let val = line.substring(line.indexOf(":") + 1, line.indexOf(";"));
            document.querySelector(":root").style.setProperty("--" + ref, val);
        }
    }
}
/**
 * 
 * @param {String} str either the themekit string or a path to a .tk file
 * @param {Boolean} isURL is the string a path to a themekit file?
 * @description applies the themekit string passed into the function
 */
function applyTheme(str, isURL) {
    if (isURL)
        fetch(str).then(res => res.text()).then(text => { _gotKit(text); });
    else
        _gotKit(str);
}