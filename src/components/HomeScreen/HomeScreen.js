import React from 'react';
import requests from '../../requests';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Row from '../Row/Row';
import './HomeScreen.css';
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* row */}
      <Row
        title='NET FLIEX ORIGINALES'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetcfetchHorrorMovieshNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

      <Row
        title='Documentries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
