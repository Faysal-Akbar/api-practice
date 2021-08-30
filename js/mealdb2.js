const getSearchValue = async () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    //use async await
    res = await fetch(url)
    data = await res.json()
    displaySearchResult(data.meals)

}

const displaySearchResult = (meals) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
    })
}

const mealDetails = (details) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (detail) => {
    const singleDivContainer = document.getElementById('single-details')
    singleDivContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detail.strMeal}</h5>
          <p class="card-text">${detail.strInstructions.slice(0, 100)}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    singleDivContainer.appendChild(div);
}