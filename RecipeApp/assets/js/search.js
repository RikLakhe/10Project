window.addEventListener('load', (event) => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get("search")) {
        fetchApi("lookup.php?i=" + urlParams.get("search")).then(jsonData => {
            jsonData.meals.forEach(categoryItem => {
                const cardColumn = document.querySelector(".searched-recipe");
                let data = luckyData(categoryItem);
                let div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML = data;
                cardColumn.append(div);
            })
        })
    }

    fetchApi("categories.php").then(jsonData => {
        jsonData.categories.forEach(categoryItem => {

            const dropdownMenuCategory = document.querySelector("#dropdown-menu-category");

            let categoryMenu = dropdownCategoryData(categoryItem);

            let categoryMenuDiv = document.createElement('div');
            categoryMenuDiv.innerHTML = categoryMenu;

            dropdownMenuCategory.append(categoryMenuDiv);
        })
    })
});
