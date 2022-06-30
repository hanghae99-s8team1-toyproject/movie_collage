import React, { useState, useEffect } from 'react';
import './Home.css'; 

const stillCuts = [
  `url(https://movie-phinf.pstatic.net/20220426_89/1650936584302EbdIF_JPEG/movie_image.jpg?type=m665_443_2)`,
  `url(https://movie-phinf.pstatic.net/20220523_267/1653271016283Xxk7P_JPEG/movie_image.jpg?type=m665_443_2)`,
  `url(https://movie-phinf.pstatic.net/20191219_253/1576735700330webEM_JPEG/movie_image.jpg?type=m665_443_2)`,
  `url(https://movie-phinf.pstatic.net/20220609_119/1654742162936nM9es_JPEG/movie_image.jpg?type=m665_443_2)`,
  `url(https://movie-phinf.pstatic.net/20220509_90/1652071818706vYhLe_JPEG/movie_image.jpg?type=m665_443_2)`,
  `url(https://movie-phinf.pstatic.net/20220608_130/16546506802104gMNH_JPEG/movie_image.jpg?type=m665_443_2)`
];
const delay = 5000;

function Home(){
  const [loading, setLoading] = useState(true);
  const [cutIdx, setCutIdx] = useState(0);
  


  useEffect (() => {
    setLoading(false)
  }, []);

  useEffect ( ()=> {
    setTimeout(() =>
      setCutIdx((current) =>
        current === stillCuts.length -1 ? 0 : current +1
        ), delay
    );
  }, [cutIdx]);

  return(
    <div className="container">
    {loading ? <div className="Loading">Loading...</div> : 
      <>
        <div className="container">
          <div className="container--menu">모두의 영화</div>
          <div className="container--body">

            <div className="container--body--Slideshow">
              <div className="Slideshow__Slideshowshadow"></div>
              <div className="Slideshow__Slider" style={{ transform : `translateX(${- cutIdx * 100}%)` }}>
                {stillCuts.map(( backgroundImage, Idx ) => (
                  <div className="Slideshow__Slide" key={Idx} style={{ backgroundImage }}></div>
                ))}
              </div>
            </div>
            
            <div className="container--body--context">
              <h1 className="context__header">어떤 영화를 볼지 고민되시나요?</h1>
              <p className="context__paragraph">다음 테스트를 진행해보세요!<br />당신의 마음에 맞는 현재 개봉중인 영화를 골라드립니다!</p>
              <button className="context__btn">시작하기</button>
            </div>
          </div>
        </div>
      </>}
    </div>
    );
}

export default Home;