const getSearchValue = () =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayMeals(data))
}

const displayMeals = (data) => {
    const meals = data.meals;
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    for(const meal of meals){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `
        cardContainer.appendChild(div);
    }
}

const loadMealDetails = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const Response = await fetch(url)
    const data = await Response.json()
    displayMealDetails(data.meals[0])

}

const displayMealDetails = (details) => {
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-25 mx-auto">
            <img src="${details.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${details.strMeal}</h5>
              <p class="card-text">${details.strInstructions.slice(0, 100)}</p>
              <a href="${details.strYoutube}" class="btn btn-danger">To see the video</a>
            </div>
          </div>
    `
    detailsContainer.appendChild(div);
}