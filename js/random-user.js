const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(Response => Response.json())
    .then(data => displayUsers(data.results))
}
loadUsers();

const displayUsers = (users) => {
    const divContainer = document.getElementById('user');
    users.forEach(user => {
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <img src="${user.picture.thumbnail}">
        <h2>User Name : </h2>
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h3>User Location : </h3>
        <h4>
        ${user.location.city}, ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}, ${user.location.street.name}, ${user.location.street.number}, ${user.location.timezone.description}, ${user.location.timezone.offset}
        </h4>
        
        `
        divContainer.appendChild(div);
    })
}