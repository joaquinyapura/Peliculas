/* const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTJlYjZhZjViYjBiYjMzYTI0MTA2NzU1NzRmYjVjNCIsIm5iZiI6MTc0Mjk1OTQ4Ny4yNTUsInN1YiI6IjY3ZTM3MzdmNDQwZjMxMWFjZTc2MTgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReZEHiVCgRQDnLg_GsP6obgPhtKe1X-sXNZPv4EzNYA" */

import { data } from "react-router-dom";


const API_KEY = "292eb6af5bb0bb33a2410675574fb5c4"
const BASE_URL = "https://api.themoviedb.org/3"


/* funcion para obtener las peliculas más populares */
export async function getPopularMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?language=es-ES&api_key=${API_KEY}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("error al obtener los títulos",error);
        
    }
}


/* funcion para obtener categorías. */


export async function getMoviesCategories() {
    
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`)
        const data = response.json();
        return data
        
        
        
        
    } catch (error) {
        console.log(error);
        
    }

    
    

}

/* moviesByCategory */

/* 
const API_KEY = "292eb6af5bb0bb33a2410675574fb5c4"
const BASE_URL = "https://api.themoviedb.org/3" */






export async function getMoviesByCategory(gender) {
    
    console.log(gender);
    try {
        
        const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${gender}`)
        const data = response.json();
        return data
        
    } catch (error) {
        console.log(error);
    }

    
    

}