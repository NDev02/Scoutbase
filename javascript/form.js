let inputs = {
    'team': 0,
    'match': 0,
    'alliance': 'red',
    'rocket-top-cargo': 0,
    'rocket-top-hatch': 0,
    'rocket-mid-cargo': 0,
    'rocket-mid-hatch': 0,
    'rocket-low-cargo': 0,
    'rocket-low-hatch': 0,
    'cargo-hatch': 0,
    'cargo-cargo': 0,
    'hab-level': 'low',
    'how-climb': 'self',
    'comment': ''
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

function setTeam() {
    inputs['team'] = event.target.value;
}

function setMatch() {
    inputs['match'] = event.target.value;
}

function setAlliance() {
    inputs['alliance'] = event.target.value;
}

function setClimbTo() {
    inputs['level'] = event.target.value;
}

function setClimb() {
    inputs['how-climb'] = event.target.value;
}

function setComment() {
    inputs['comment'] = event.target.value;
}

function submit() {
    
}