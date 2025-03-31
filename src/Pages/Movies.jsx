import { useEffect, useState } from "react";
import { getMoviesByCategory, getMoviesCategories } from "../Services/api";
import { MostPopularMovies } from "../Components/MostPopularMovies";
import { MoviesByCategory } from "../Components/MoviesByCategory";

export const Movies = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);

  const [selectedCategorie, setSelectedCategorie] = useState();
  const [choosedCategorie, setChoosedCategorie] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      setLoader(true);
      const data = await getMoviesCategories();

      setCategories(data.genres);
      setLoader(false);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchMoviesByCategories() {
      const data = await getMoviesByCategory(selectedCategorie);
      setChoosedCategorie(data.results);
    }

    fetchMoviesByCategories();
  }, [selectedCategorie]);

  const handleselected = (e) => {
    setSelectedCategorie(e);
  };
  return (
    <article className="container mx-auto">
      <div className="flex flex-col w-full items-center">
        <h2 className="text-2xl font-bold text-sky-900">
          Busca tu pelicula por categorías.
        </h2>
        <div className="w-full grid grid-cols-8 mt-6 gap-2">
          {loader ? (
            <div>loading... </div>
          ) : (
            categories.map((categoria) => (
              <a
                className=" bg-sky-800 rounded-full w-2/3 text-white text-center p-2 hover:bg-sky-700 transition-all ease-in-out duration-500"
                href="#"
                key={categoria.id}
                onClick={() => handleselected(categoria.id)}
              >
                {categoria.name}
              </a>
            ))
          )}
        </div>
      </div>
      <MoviesByCategory movies={choosedCategorie} gender={selectedCategorie} />
      <MostPopularMovies />
    </article>
  );
};
