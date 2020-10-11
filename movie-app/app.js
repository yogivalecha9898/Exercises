const aurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const ip = "https://image.tmdb.org/t/p/w1280"
const sapi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const getMovies = async url=> {
    const resp = await fetch(url)
    const respData = await resp.json()
    
    show(respData.results)

    return respData
}

getMovies(aurl)

const show = (movie)=> {
    main.innerHTML = '';
    movie.forEach((el) => {
        const movie = document.createElement('div')
        movie.classList.add('movie')
        movie.innerHTML = `
            <img src="${ip + el.poster_path}" alt="${el.title}">
            <div class="movie-info">
                <h3>${el.title}</h3>
                <span>${el.vote_average}</span>
            </div>
            <div class="overview">
                ${el.overview}
            </div>

        `

        main.appendChild(movie)
    })
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const sterm = search.value
    if(sterm) {
        getMovies(sapi + sterm)

        search.value = ""
    }
})
