const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('mealLisyt');
const modalContainer = document.querySelector('modalContainer');
const mealDetailsContent = document.querySelector('modalContainer');
const recipeCloseButton = document.getElementById('recipeCloseButton');

// even listener

searchButton.addEventListener('click', async() =>{
    const ingredient = searchInput.ariaValueMax.trim(); //trim remove all the space and white
    if(ingredient){
        const meals = await searchMealsByIngredient(ingredient);
        displayMeals(meals);
    }


})
mealList.addEventListener('click', async(e) =>{
    const card = e.target.closest('.meal-item');
    if(card){
        const mealId = card.dataset.id;
        const meal = await getMealDetails(mealId);
        if(meal){
            showMealDetailsPopup(meal);
        }
    }
});

//function to detch meals by ingredient
async function searchMealsByIngredient(ingredient){
    try{
        const response = await fetch('');
        const data = await response.json();
        return data.meals;
    }catch(error){
        console.error('Error fetching data:', error);
    }
}
//function to fetch meal details by ID
async function getMealDetails(mealIId){
    try{
        const response = await fetch('');
        const data = await response.json();
        return data.meals[0];

    }catch(error){
        console.log('Error fetching meal details:',error);
    }
}


// Funtion to display meals in the list

function displayMeals(meals){
    mealList.innerHTML ='';
    if(meals){
        meals.foreach((meal) => {
        const mealItem = document.createElement('div');
        mealItem.classList.add('meal-item');
        mealItem.dataset.id = meal.idMeal;
        mealItem,innerHTML =`
        <img src=
        `
        })
    }
}


//function to create and display meal details on popup
function showMealDeteilsPopup(meal){
    mealDetailsContent.innerHTML = `
    <h2 class ="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class='recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    
    `

}
// Event listener for popup close button
recipeCloseButton.addEventListener('click',closeRecipeModal);
function closeRecipeModal(){
    modalContainer.style.display = 'none';

}

searchInput.addEventListener('keyup',(e) =>{
    if(e.key ==="Enter"){
        performSearch();
    }
});

async function performSearch() {
    const ingredient = searchInput.value.trim();
    if(ingredient);{
        const meals = await searchMealsByIngredient(ingredient);
        displayMeals(meals);
    }
}

//perform a chicken search on page
window.addEventListener('load', () =>{
    searchInput.value = 'chicken';
    performSearch();


});


