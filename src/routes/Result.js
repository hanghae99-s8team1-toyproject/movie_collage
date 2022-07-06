import { useState } from "react";
import Detail from "./Detail";
import "./Result.css";


function Result() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [popupState, setPopupState] = useState(false);

  const openToPopup = () => {
    setPopupState(true);
  }

  const closeToPopup = () => {
    setPopupState(false);
  }

  return (
    <>
      {popupState ? <Detail close={closeToPopup}></Detail> : "로딩중..."}
      <div className="resultpage">
        <header className="result--header">모두의 영화</header>
        <section className="result--movie">
          

          
        <div className="result--movie--text">
          <h1>오늘 당신만을 위한 영화는 </h1>
          <span>
            어벤저스 입니다.<br/> 어벤저스는 울적한당신에게 위로가 될수 있는
            영화입니다.
          </span>
          <div className="result--movie--info">
            <li>장르: {movieInfo.genre}</li>
            <li>평점: 3.5</li>
          </div>
        

        </div>
        <div className="result--movie--img">  
          <img src="data:image/jpeg;base64,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" alt="movie-poster" />
          <button onClick={openToPopup} close="closeToPopup">상세보기</button>
        </div>
        
          
        </section>
      </div>
    </>
  );
}

{
}
export default Result;
