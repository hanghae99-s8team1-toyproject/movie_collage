import "./Test.css";
import { useState, useEffect } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [질문, 질문변경] = useState(Question);
  const [번호, 번호변경] = useState(0);
  const onClick = (event) => {
    번호변경(번호 + 1);
    if (번호 === 질문.length - 1) {
      console.log("페이지 이동");
      navigate("/result");
      // window.location.reload();
    }
  };
  const [fade, setfade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setfade("end");
    }, 50);
  }, [번호]);

  return (
    <div className="App">
      <header className="header">모두의 영화</header>
      <section className={"content start " + fade}>
        <div className="content--question">
          <p className="content--question__box">{질문[번호].q}</p>
          <div className="프로그래스바">
            <span>1 | 5</span>
            <div className="프로그래스바--container">
              <input
                type="radio"
                className="radio"
                name="progress"
                value="five"
                id="five"
              />

              <input
                type="radio"
                className="radio"
                name="progress"
                value="twentyfive"
                id="twentyfive"
                checked
              />

              <input
                type="radio"
                className="radio"
                name="progress"
                value="fifty"
                id="fifty"
              />

              <input
                type="radio"
                className="radio"
                name="progress"
                value="seventyfive"
                id="seventyfive"
              />

              <input
                type="radio"
                className="radio"
                name="progress"
                value="onehundred"
                id="onehundred"
              />

              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
            <span>\t </span>
            <span> \t ..............</span>
          </div>
        </div>
        <div className="content--answer">
          <button className="content--answer__btn" onClick={onClick}>
            {질문[번호].b1}
          </button>
          <button className="content--answer__btn" onClick={onClick}>
            {질문[번호].b2}
          </button>
        </div>
      </section>
    </div>
  );
}

{
}
export default Test;
