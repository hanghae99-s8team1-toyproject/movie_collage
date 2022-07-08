import { useState } from "react";
import Detail from "./Detail";
import { useLocation } from "react-router-dom";
import "./Result.css";

function Result() {
  const [popupState, setPopupState] = useState(false);

  const openToPopup = () => {
    setPopupState(true);
  };

  const closeToPopup = () => {
    setPopupState(false);
  };

  const location = useLocation();
  const data = location.state.testResult;

  return (
    <>
      {popupState ? <Detail close={closeToPopup}></Detail> : null}
      <div className="resultpage">
        <header className="result--header">모두의 영화</header>
        <section className="result--movie">
          <div className="result--movie--text">
            <h1>오늘 당신만을 위한 영화는 </h1>
            <span className="result--movie--text--keywords">
              &lt; {data.title}
              &gt;입니다
              <br /> 키워드{" "}
              <span className="result--movie--text--keyword">
                {data.keyword}
              </span>
            </span>
            <div className="result--movie--info"></div>
          </div>
          <div className="result--movie--img">
            <img src={data.thumbnail} className="result--movie--img--poster" />
            <button
              onClick={openToPopup}
              close="closeToPopup"
              seq={data.movieUrl_seq}
            >
              상세보기
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

{
}
export default Result;
