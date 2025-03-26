const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTJlYjZhZjViYjBiYjMzYTI0MTA2NzU1NzRmYjVjNCIsIm5iZiI6MTc0Mjk1OTQ4Ny4yNTUsInN1YiI6IjY3ZTM3MzdmNDQwZjMxMWFjZTc2MTgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReZEHiVCgRQDnLg_GsP6obgPhtKe1X-sXNZPv4EzNYA"

const API_KEY = "292eb6af5bb0bb33a2410675574fb5c4"

const API_URL = "https://api.themoviedb.org/3/movie/popular?language=es-ES"


async function getPopularMovies() {
    try {
        const response = await fetch(`${API_URL}&api_key=${API_KEY}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("error al obtener los títulos",error);
        
    }
}

getPopularMovies().then(data => {
    if (data && data.results) {
        data.results.forEach(movie => console.log(movie.title));
    }
});