const formSearch = document.querySelector("#recipe-search");


window.addEventListener('load', (event) => {
    formSearch.reset();
    fetchApi("categories.php").then(jsonData => {
        jsonData.categories.forEach(categoryItem => {
            const cardColumn = document.querySelector(".card-columns");

            let data = categoryData(categoryItem);

            let div = document.createElement('div');
            div.classList.add("card");
            div.innerHTML = data;

            cardColumn.append(div);

            const dropdownMenuCategory = document.querySelector("#dropdown-menu-category");

            let categoryMenu = dropdownCategoryData(categoryItem);

            let categoryMenuDiv = document.createElement('div');
            categoryMenuDiv.innerHTML = categoryMenu;

            dropdownMenuCategory.append(categoryMenuDiv);
        })
    })
});

const searchBody = document.querySelector(".item-search-body");

formSearch.addEventListener("submit", (e) => {
    e.preventDefault()

    fetchApi("search.php?s=" + formSearch.search.value).then(jsonData => {
        searchBody.classList.remove('d-none');
        const dropdownMenuCategory = document.querySelector("#item-search-cards");
        dropdownMenuCategory.innerHTML = "";

        if (jsonData.meals) {
            jsonData.meals.forEach(item => {
                data = searchItemBody(item)

                let div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML = data;

                dropdownMenuCategory.append(div)
            })
        } else {
            let div = document.createElement('div');
            div.classList.add("card");
            div.innerHTML = "No data";

            dropdownMenuCategory.append(div)
        }
    })
    formSearch.reset();
});
