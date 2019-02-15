
class Service {

    constructor() {
        this.tbaKey = "l546X6HHpPOiuPH0ZtO4rMgY1FvUWYIb9ruZRSdBcMlOsKBlMuyPzplegeFF7Oue";
        this.tbaRoot = "https://www.thebluealliance.com/api/v3";
        this.apiKey = '2596ccc0-09d5-4b73-bebc-4107ee0c8f6e';
        this.root = "http://localhost:8080/";
    }

    request(subdir, isRoot, callback) {
        if (!isRoot)
            fetch(`${this.root}/${subdir}?key=${this.apiKey}`).then(res => res.json()).then(callback);
        else
            fetch(`${this.root}/admin/${subdir}?key=${this.apiKey}`).then(res => res.json()).then(callback);
    }

    send(subdir, isRoot, data, callback) {
        if (!isRoot)
            postData(`${this.root}/${subdir}?key=${this.apiKey}`, data).then(res => res.json()).then(callback);
        else
            postData(`${this.root}/admin/${subdir}?key=${this.apiKey}`, data).then(res => res.json()).then(callback);
    }

    post(url, data) {
        return fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data)
        });
    }
}

class Basecamp extends Service {

    constructor() {
        super();
    }

    test() {
        super.request('', false, res => {
            console.log(res);
        });
    }

    postMatchData(event, data) {
        super.request()
    }
}
