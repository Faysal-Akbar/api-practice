const searchButton = () => {
  const searchField = document.getElementById('search-field');
  const searchFieldText = searchField.value;
  searchField.value = '';
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchFieldText}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayTeams(data.teams))
}

const displayTeams = (teams) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  teams.forEach(team => {
    console.log(team);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick="singleTeamDetails(${team.idTeam})" class="card h-100 text-center shadow-lg">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Team Name : ${team.strTeam}</h5>
              <h5 class="card-title">League : ${team.strLeague}</h5>
              <h5 class="card-title">Home Vanue : ${team.strStadium}</h5>
              <p class="card-text">About Team : ${team.strDescriptionEN.slice(0, 200)}</p>
            </div>
          </div>
    `
    cardContainer.appendChild(div);
  })
}

const singleTeamDetails = (details) => {
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${details}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayTeamDetails(data.teams[0]))
}

const displayTeamDetails = (team) => {
  const singleTeamContainer = document.getElementById('single-team');
  singleTeamContainer.innerHTML = '';
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card text-center shadow-lg">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5>Team Name : ${team.strTeam}</h5>
              <h5>League : ${team.strLeague}</h5>
              <h5>Home Vanue : ${team.strStadium}</h5>
              <p>About Team : ${team.strDescriptionEN.slice(0, 200)}</p>
              <a href="${team.strYoutube}" class="btn btn-warning">Go YouTube</a>
            </div>
          </div>  
  `
  singleTeamContainer.appendChild(div);
}