const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

function displayMeals(meals) {
    console.log(meals);
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerText = ``;
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
        <div class="col">
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${meal.strMeal} </h5>
                        <p class="card-text"> ${meal.strInstructions.slice(0, 200)} </p>
                    </div>
                </div>
            </div>

        `;
        foodContainer.appendChild(div);
    })
}
function searchBtn() {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    loadMeal(searchFieldText);
    searchField.value = '';

}

// loadMeal('a');