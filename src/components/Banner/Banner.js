import React, { useState, useEffect } from 'react';
import './banner.css';
import api from '../../axios';
import requests from '../../requests';
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    console.log('movie', movie);
  }, [movie]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(requests.fetchNetflixOriginals);
      console.log('temp', request.data.results);
      setMovie(
        request.data.results[
          Math.round(Math.random() * request.data.results.length - 1)
        ]
      );
    };

    fetchData();
  }, []);
  const truncate = (text, n) => {
    console.log(n);
    return text?.length > n ? text.substring(0, n - 1) + '...' : text;
  };

  return (
    <header
      class='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__coentents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner__fadeBottom' />
    </header>
  );
};

export default Banner;
