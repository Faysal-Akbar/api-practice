const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(Response => Response.json())
    .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = (data) => {
    const buddies = data.results;
    const divContainer = document.getElementById('div-container');
    buddies.forEach(buddy => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h4>
        <h5>Email : ${buddy.email}</h5>
        <h5>Phone : ${buddy.phone}</h5>
        `
        divContainer.appendChild(div);
    })
}
