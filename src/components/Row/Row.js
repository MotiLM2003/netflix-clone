import React, { useState, useEffect } from 'react';
import api from '../../axios';
import './row.css';
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    const fetchMovies = async () => {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    };

    fetchMovies();
  }, []);
  return (
    <div className='row'>
      <h2>{title}</h2>
      {movies &&
        movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row_posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=''
          />
        ))}
    </div>
  );
};

export default Row;
