const movieCard = (movieData) => `
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w1280${movieData.poster_path}"
                 alt="${movieData.title}">
            <div class="card-body">
                <h5 class="card-title">${movieData.original_title}</h5>
                <span class="card-score">${movieData.vote_average}</span>
            </div>
`

const dropdownGenreData = (genreItem) => `<a class="dropdown-item" href="genre.html?selected=${genreItem.id}">${genreItem.name}</a>`
