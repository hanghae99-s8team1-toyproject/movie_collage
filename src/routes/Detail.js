import React, { useState, useEffect } from 'react';
import './Detail.css';

function Detail(props){
  const [loadingState, setLoadingState] = useState(true);
  const [movieData, setMovieData] = useState({});
 // fetch('http://54.81.236.188/Result')
  //   .then(response => response.json())
  //   .then(res => console.log(res));

  useEffect(() => {
    fetch('http://54.81.236.188/Result')
      .then(response => response.json())
      .then(res => {
      setMovieData(res.movies);
      setLoadingState(false);
    });
  }, []);

  let movieInfo = {};

  if (JSON.stringify(movieData) !== '{}') {
    movieData.forEach(pram => {
      if (pram.movieUrl_seq === 2252) {
        movieInfo = pram;
        return movieInfo
      }
    })
  }
  
  return (
    <div className='container--detail'>
      <div className='detail--background'>
        {loadingState ? 
        <div className='detail--loading'>
          <div class="detail--loading__loader loader__anim"></div>
        </div> 
        : 
        <>
          <div className='detail--background__L'>
            <img src={movieInfo.thumbnail} alt="movie poster" />
          </div>
          <div className='detail--background__R'>
            <h1>{movieInfo.title}</h1>
            <h2>{movieInfo.title_english}</h2>
            <ul>
              <li>{movieInfo.year}년</li>
              <li>{movieInfo.runningTime}</li>
            </ul>
            <div>
              <div><span>감독</span> {movieInfo.director}</div>
              <div><span>출연</span> {movieInfo.actor}</div>
              <div><span>키워드</span> {movieInfo.keyword}</div>
              <Desc title="시놉시스" context={movieData.description_intro ? (movieData.description_intro).substr(0, 100) : ""} />
              <Desc title="줄거리" context={movieData.description_full ? (movieData.description_full).substr(0, 300) : ""} />
            </div>
            <button onClick={props.close}>창 닫기</button>
          </div>
        </>}
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