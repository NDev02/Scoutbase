
function setTeam() {
    let basecamp = new Basecamp();
    let teamReq = event.target.value;
    basecamp.getReportForTeam(localStorage.getItem('event'), event.target.value, data => {
        let tba = new BlueAlliance();
        tba.getTeamName(teamReq, d2 => generateReport(data, d2));
    });
}

function generateReport(data, teamInfo) {
    let comments = '';
    let climbing = '';
    for(let c of data.climbing) 
        climbing += c + "<br/>";
    for(let c of data.comments) 
        comments += c + "<br/>";
    let string = `
    <div class="retoggle">
        <h2 class="keep" id="team-name">${teamInfo.nickname}</h2>
        <h3 id="team-number">${teamInfo.team_number}</h3>
        <table width="100%" cellspacing="0px">
            <tr>
                <th>Action</th><th>Min</th><th>Max</th><th>Average</th>
            </tr>
            <tr>
                <td>Rocket Top Cargo</td>
                <td>${data['rocket-top-cargo'][0]}</td>
                <td>${data['rocket-top-cargo'][2]}</td>
                <td>${data['rocket-top-cargo'][1]}</td>
            </tr>
            <tr>
                <td>Rocket Top Hatch</td>
                <td>${data['rocket-top-hatch'][0]}</td>
                <td>${data['rocket-top-hatch'][2]}</td>
                <td>${data['rocket-top-hatch'][1]}</td>
            </tr>
            <tr>
                <td>Rocket Mid Cargo</td>
                <td>${data['rocket-mid-cargo'][0]}</td>
                <td>${data['rocket-mid-cargo'][2]}</td>
                <td>${data['rocket-mid-cargo'][1]}</td>
            </tr>
            <tr>
                <td>Rocket Mid Hatch</td>
                <td>${data['rocket-mid-hatch'][0]}</td>
                <td>${data['rocket-mid-hatch'][2]}</td>
                <td>${data['rocket-mid-hatch'][1]}</td>
            </tr>
            <tr>
                <td>Rocket Low Cargo</td>
                <td>${data['rocket-low-cargo'][0]}</td>
                <td>${data['rocket-low-cargo'][2]}</td>
                <td>${data['rocket-low-cargo'][1]}</td>
            </tr>
            <tr>
                <td>Rocket Low Hatch</td>
                <td>${data['rocket-low-hatch'][0]}</td>
                <td>${data['rocket-low-hatch'][2]}</td>
                <td>${data['rocket-low-hatch'][1]}</td>
            </tr>
            <tr>
                <td>Cargo Ship - Cargo</td>
                <td>${data['cargo-cargo'][0]}</td>
                <td>${data['cargo-cargo'][2]}</td>
                <td>${data['cargo-cargo'][1]}</td>
            </tr>
            <tr>
                <td>Cargo Ship - Hatch</td>
                <td>${data['cargo-hatch'][0]}</td>
                <td>${data['cargo-hatch'][2]}</td>
                <td>${data['cargo-hatch'][1]}</td>
            </tr>
        </table>
        <p><b>Climbing</b>:<br/>${climbing == "" ? 'No data': climbing}</p>
        <p id="team-description"><b>Comments</b>:<br/>${comments == "" ? 'No comments': comments}</p>
    </div>
    `;
    document.querySelector('.container').innerHTML += string;
}
