import React, { useState } from "react";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [ratings, setRatings] = useState(0);
  const [duration, setDuration] = useState("");

  const [favMovies, setFavMovies] = useState([]);
  const [error, setError] = useState("");
  const handleClick = () => {
    if (ratings > 100 || movieName === "" || duration === "") {
      setError("Please fill the details properly..");
      // } else if (duration.endsWith("mins")) {
      //   //   matches = duration.match(/(\d+)/);
      //   //   dur = matches[0] / 60;
      //   //   console.log(dur);
      // }
    } else {
      const movieDetails = {
        movieName,
        ratings,
        duration,
      };
      setFavMovies([...favMovies, movieDetails]);
      setError("");
    }
  };
  return (
    <div className="flex flex-col w-full  text-white justify-center items-center">
      <h2 className="bg-green-400 w-full text-center">Add Favorite Movie</h2>
      <div className="flex flex-row gap-7 full justify-center">
        <div className="w-96 bg-white text-black flex flex-col gap-3 shadow-xl p-2">
          <label htmlFor="name" className="text-gray-400">
            Movie Name
          </label>
          <input
            type="text"
            placeholder="Movie Name"
            className="outline-none border p-1 rounded-lg"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          <label htmlFor="name" className="text-gray-400">
            Ratings
          </label>
          <input
            type="text"
            placeholder="Enter ratings from 1-100"
            className="outline-none border p-1 rounded-lg"
            onChange={(e) => {
              setRatings(e.target.value);
            }}
          />
          <label htmlFor="name" className="text-gray-400">
            Duration
          </label>
          <input
            type="text"
            placeholder="duration in hours or minutes"
            className="outline-none border p-1 rounded-lg"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          {error && (
            <div className="bg-red-300 h-auto px-1">
              <p className="text-xs">{error}</p>
            </div>
          )}

          <button
            className="bg-green-500 text-white font-semibold p-1 rounded-sm w-1/2 mx-auto"
            onClick={handleClick}
          >
            Save
          </button>
        </div>
        <div className="w-96 h-96 bg-white text-black flex flex-col">
          <h4 className="text-center">Movies</h4>
          {favMovies.map((movie, index) => (
            <div
              key={index}
              className="flex flex-row gap-3 justify-between items-center"
            >
              <div className="flex flex-col">
                <h4 className="font-semibold tracking-tight text-xl">
                  {movie.movieName}
                </h4>
                <p className="text-sm">{movie.ratings}/100</p>
              </div>
              <span>
                {movie.duration.endsWith("hrs")
                  ? movie.duration
                  : (movie.duration.match(/(\d+)/)[0] / 60)
                      .toString()
                      .slice(0, 3) + "hrs"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
