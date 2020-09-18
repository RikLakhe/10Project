const categoryData = (categoryItem) => `<img src=${categoryItem.strCategoryThumb} class="card-img-top" alt=${categoryItem.strCategory}>
    <div class="card-body">
      <h5 class="card-title"><a href="category.html?selected=${categoryItem.strCategory}">${categoryItem.strCategory}</a></h5>
      <p class="card-text">${categoryItem.strCategoryDescription}</p>
    </div>`

const categorySortedData = (categoryItem) => `<img src=${categoryItem.strMealThumb} class="card-img-top" alt=${categoryItem.strMeal}>
    <div class="card-body">
      <a href="search.html?search=${categoryItem.idMeal}"><h5 class="card-title">${categoryItem.strMeal}</h5></a>
    </div>`

const dropdownCategoryData = (categoryItem) => `<a class="dropdown-item" href="category.html?selected=${categoryItem.strCategory}">${categoryItem.strCategory}</a>`

const searchItemBody = (searchItem) => {

    const getTags = () => {
        if (searchItem.strTags) {
            let tags = searchItem.strTags.split(",");
            let domTemp = "";
            tags.forEach(tag => {
                domTemp += `<span class="badge badge-info">${tag}</span>`
            })

            return domTemp;
        } else {
            return "";
        }
    }

    const getBody = () => {
        return searchItem.strInstructions.substr(0, 200) + "....";
    }

    return (
        `<div class="card">
            <div class="card-body">
             <a href="search.html?search=${searchItem.idMeal}"><h5>${searchItem.strMeal}</h5></a>${searchItem.strSource && `<span class="text-muted">Source: ${searchItem.strSource}</span>`}
                <p>${getTags()}</p><p>${getBody()}</p></div>
        </div>`
    )
}


const luckyData = (categoryItem) => `
    <div class="card-body">
    <a href="${categoryItem.strYoutube}" target="_blank" ><h5 class="card-title">${categoryItem.strMeal}</h5></a> 
    <div class="d-flex">
          <p class="card-text"  style="width: 1000px">${categoryItem.strInstructions}</p>

    <img src=${categoryItem.strMealThumb} alt=${categoryItem.strCategory} style="width: 1000px">
</div>
    
    </div>`
