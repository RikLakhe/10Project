window.addEventListener('load', (event) => {
    event.preventDefault();
    fetchApi("random.php").then(jsonData => {
        jsonData.meals.forEach(categoryItem => {
            const cardColumn = document.querySelector(".lucky-recipe");
            let data = luckyData(categoryItem);
            let div = document.createElement('div');
            div.classList.add("card");
            div.innerHTML = data;
            cardColumn.append(div);
        })
    })
});
