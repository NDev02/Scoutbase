
function setTeam() {
    let basecamp = new Basecamp();
    basecamp.getMatchesForTeam(localStorage.getItem('event'), event.target.value, data => {
        console.log(data);
    });
}

function generateReport() {
    let string = `
    <div class="toggle">
        <h2 class="keep" id="team-name">Devil Tech</h2>
        <h3 id="team-number">1559</h3>
        <table width="100%" cellspacing="0px">
            <tr>
                <th>Cargo</th>
                <th>Hatch</th>
            </tr>
            <tr>
                <td>Rocket Top</td>
                <td>Rocket Top</td>
            </tr>
            <tr>
                <td>Rocket Mid</td>
                <td>Rocket Mid</td>
            </tr>
            <tr>
                <td>Rocket Low</td>
                <td>Rocket Low</td>
            </tr>
            <tr>
                <td>Cargo Ship</td>
                <td>Cargo Ship</td>
            </tr>
        </table>
        <p>Climbing: <span id="team-climb">Self</span></p>
        <p id="team-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit felis,
            viverra
            a
            consectetur vel, volutpat accumsan massa. Quisque volutpat diam metus, vel elementum ligula
            sagittis
            ut.
            Nam non mauris id risus volutpat semper. Curabitur aliquam luctus felis at fermentum. Nam tempus
            interdum
            mauris, eu semper ex tincidunt et. Maecenas sodales nisl arcu, quis porttitor lorem dignissim sit
            amet.
            Morbi bibendum, mauris nec lobortis porttitor, purus nibh sollicitudin dolor, non scelerisque
            turpis
            tortor
            id tortor. Vivamus tristique dolor vitae lacus maximus placerat. Curabitur efficitur magna ipsum,
            cursus
            venenatis purus feugiat id. Aenean varius id risus id gravida. Duis nec neque a sapien iaculis
            pretium.
            Maecenas venenatis feugiat felis in tempor. Quisque consequat diam at nisl maximus lobortis.</p>
        <button>Add to watchlist</button>
        <button>Remove from selection</button>
    </div>
    `;
}