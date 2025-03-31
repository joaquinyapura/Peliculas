const pathURL = "https://image.tmdb.org/t/p/w300";
export const MoviesByCategory = ({ movies, gender }) => {
  return (
    <article className="container ">
      <h2 className="text-4xl font-bold text-sky-700">
        Peliculas de {gender}{" "}
      </h2>
      <div className="grid grid-cols-8 gap-2 mt-6 mb-6">
        {movies.map((movie, i) => (
          <a href="#" key={i} className="col-span-1 shadow-2xl rounded-md p-2">
            <div className="w-full">
              <img src={`${pathURL}${movie.poster_path}`} alt="" />
            </div>
            <div className="flex flex-col p-2">
              <p className="text-md font-bold uppercase">{movie.title}e</p>
              <p className="text-sky-700">
                {movie.release_date
                  ? movie.release_date.split("-")[0]
                  : "Sin fecha"}
              </p>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
};
