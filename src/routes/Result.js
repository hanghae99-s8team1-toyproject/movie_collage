import { useState } from "react";
import Detail from "./Detail";

function Result() {
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
      <div> 
        <section className="movie--result">
      <p>오늘 당신만을 위한 영화는 </p>
      <span>어벤저스 입니다. 어벤저스는 울적한당신에게 위로가 될수 있는 영화입니다.</span>
      <li>장르: 스릴러</li>
      <li>평점: 3.5</li>
      </section>
      <section className="movie--img">
        <img src="" alt="movie-poster"/>
          <button onClick={openToPopup} close="closeToPopup">상세보기</button>
      </section>
      </div>
    </>
  );
}

{
}
export default Result;
