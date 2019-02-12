let inputs = {
    'rocket-top-cargo': 0,
    'rocket-top-hatch': 0,
    'rocket-mid-cargo': 0,
    'rocket-mid-hatch': 0,
    'rocket-low-cargo': 0,
    'rocket-low-hatch': 0,
    'cargo-hatch': 0,
    'cargo-cargo': 0
}

function inc(type) {
    inputs[type] ++;
    document.querySelector(`#${type}`).innerHTML = inputs[type];
}

function dec(type) {
    if(inputs[type] < 1)
        return;
    inputs[type] --;
    document.querySelector(`#${type}`).innerHTML = inputs[type];
}