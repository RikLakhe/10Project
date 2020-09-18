window.addEventListener('load', (event) => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const cardColumn = document.querySelector(".card-columns");

    if (urlParams.get("selected")) {
        fetchApi("filter.php?c=" + urlParams.get("selected")).then(jsonData => {


            jsonData.meals.forEach(categoryItem => {
                const cardColumn = document.querySelector(".card-columns");

                let data = categorySortedData(categoryItem);

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
