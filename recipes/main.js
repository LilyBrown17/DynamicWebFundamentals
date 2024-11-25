import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
    let html = `<div class="tag">`
    tags.forEach((tag) => {
        html += `<p>${tag}</p>`
    });
    html += `</div>`
	return html;
}

function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`
    for (let i = 0; i < 5; i++) {
        if (i <= rating) {
            html += `   <span aria-hidden="true" class="icon-star">⭐</span>`
        }
        else if (i > rating) {
            html += `   <span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	html += `</span>`
	return html
}

function recipeTemplate(recipe) {
	return `<div class="recipe">
        <div class="recipe-img">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="recipe-info">
            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <div class="recipe-name">
                <p>${recipe.name}</p>
            </div>
            <div class="rating">
                ${ratingTemplate(recipe.rating)}
            </div>
            <div class="recipe-desc">
                <p>${recipe.description}</p>
            </div>
        </div>
    </div>`;
}

function renderRecipes(recipeList) {
    const main = document.querySelector('main');
    main.innerHTML = ''
    recipeList.forEach((recipe) => {
        main.insertAdjacentHTML('beforeend', recipeTemplate(recipe))
    });   
}

function filter(query) {
	const filtered = recipes.filter(recipe => recipe.name.toLowerCase().includes(query) || recipe.tags.find((item) => item.toLowerCase().includes(query)))
	// sort by name
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name))
		return sorted
}

const search = document.querySelector('form')

function searchHandler(e) {
	e.preventDefault()
    console.log('test')
    let query = document.querySelector('input').value
    query = query.toLowerCase()
    const output = filter(query)
    renderRecipes(output)
}

search.addEventListener('submit', searchHandler)

function init() {
  const recipe = getRandomListEntry(recipes)
  renderRecipes([recipe]);
}

init();

