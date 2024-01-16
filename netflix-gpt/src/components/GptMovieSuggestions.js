import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null; // can be shown shimmer UI
  return (
    <div className="p-4 m-4 bg-black text-white">
      {movieNames.map((movieName, index) => (
        <MovieList
          title={movieName}
          movies={movieResults[index]}
          key={movieName}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
