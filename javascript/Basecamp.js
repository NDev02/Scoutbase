
class Service {

    constructor() {
        this.tbaKey = "l546X6HHpPOiuPH0ZtO4rMgY1FvUWYIb9ruZRSdBcMlOsKBlMuyPzplegeFF7Oue";
        this.tbaRoot = "https://www.thebluealliance.com/api/v3";
        this.apiKey = "2596ccc0-09d5-4b73-bebc-4107ee0c8f6e";
        this.root = "https://www.scoutbase.ml";
    }

    request(subdir, isRoot, callback) {
        if (!isRoot)
            fetch(this.root + "/" + subdir + "?key=" + this.apiKey).then(res => res.json()).then(callback).catch(e => alert(e));
        else
            fetch(`${this.root}/admin/${subdir}?key=${this.apiKey}`).then(res => res.json()).then(callback);
    }

    send(subdir, isRoot, data, callback) {
        if (!isRoot) {
            this.post(this.root + "/" + subdir + "?key=" + this.apiKey, data).then(res => res.json()).then(callback).catch(err => {
                alert(err);
            });
        }
        else {
            this.post(`${this.root}/admin/${subdir}?key=${this.apiKey}`, data).then(res => res.json()).then(callback);
        }
    }

    post(url, data) {
        console.log(data);
        return fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

class BlueAlliance extends Service {
    constructor() {
        super();
        this.root = this.tbaRoot;
        this.apiKey = this.tbaKey;
    }

    request(subdir, callback) {
        fetch(this.root + "/" + subdir + "?X-TBA-Auth-Key=" + this.apiKey).then(res => res.json()).then(callback).catch(e => alert(e));
    }

    getTeamName(team, callback) {
        this.request(`team/frc${team}`, callback);
    }
}

class Basecamp extends Service {

    constructor() {
        super();
    }

    test() {
        super.request('', false, res => {
            alert(res);
        });
    }

    postMatchData(event, data, callback) {
        data.scouter = localStorage.getItem('name') + localStorage.getItem('team');
        super.send(event + "/scout", false, data, callback);
    }

    getMatchesForTeam(event, team, cb) {
        super.request(`${event}/matches/${team}`, false, cb);
    }

    getReportForTeam(event, team, cb) {
        super.request(`${event}/teams/${team}`, false, cb);
    }
}
