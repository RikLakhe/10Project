const popularMovies = document.querySelector("#popular-movie");
const navbarDropdown = document.querySelector("#dropdown-menu-category");

window.addEventListener('load', (event) => {
    getMoviesGenre().then(jsonData => {
        jsonData.genres.forEach(genre => {
            let data = dropdownGenreData(genre)
            let div = document.createElement('div');
            div.innerHTML = data;
            navbarDropdown.append(div);
        })
    })

    getMoviesList()
        .then(jsonData => {
            jsonData.results.forEach(movie => {
                let data = movieCard(movie)
                let div = document.createElement('div');
                div.classList.add("card");
                div.innerHTML = data;
                popularMovies.append(div);
            })
        })
})
