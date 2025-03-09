import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const apiKey = "072e1f2e070ca15fa6585bab7bb43f3b";
    axios
      .get(
        `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
      )
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <img
        src="/Netflix-Logo.wine.svg"
        alt="Icon"
        className="absolute top-0 left-0 w-[200px] h-[200px] "
      />
      <h1 className="text-white text-4xl text-center">Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 px-4 mt-4 mb-8">
        {movies.map((item) => (
          <div key={item.id} className="w-full bg-black h-fit flex flex-col ">
            <img src={item.Poster} alt={item.Title} className="rounded-xl" />
            <h2 className="text-white">{item.Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
