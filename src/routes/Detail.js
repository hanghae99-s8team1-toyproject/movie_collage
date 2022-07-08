import React, { useState, useEffect } from 'react';
import './Detail.css';

function Detail(props){
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch('https://yts.mx/api/v2/movie_details.json?movie_id=4200')
    .then(response => response.json())
    .then(res => {
      setMovieData(res.data.movie);
    });
  }, []);

  return (
    <div className='container--detail'>
      <div className='detail--background'>
        <div className='detail--background__L'>
          <img src={movieData.medium_cover_image} alt="movie poster" />
        </div>
        <div className='detail--background__R'>
          <h1>{movieData.title}</h1>
          <h2>{movieData.title_english}</h2>
          <ul>
            <li>{movieData.year}년</li>
            <li>평점: {movieData.rating}점</li>
            <li>{movieData.runtime}분</li>
          </ul>
          <div>
            <div><span>감독</span> {movieData.genres}</div>
            <div><span>출연</span> {movieData.genres}</div>
            <div><span>키워드</span> {movieData.genres}</div>
            <Desc title="시놉시스" context={movieData.description_intro ? (movieData.description_intro).substr(0, 100) : ""} />
            <Desc title="줄거리" context={movieData.description_full ? (movieData.description_full).substr(0, 300) : ""} />
          </div>
          <button onClick={props.close}>창 닫기</button>
        </div>
      </div>
    </div>
  )
}

function Desc(props){
  return (
    <dl>
      <dt>{props.title}</dt>
      <dd>{props.context}</dd>
    </dl>
  )
}

export default Detail;