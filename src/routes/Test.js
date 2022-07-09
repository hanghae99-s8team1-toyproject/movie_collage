import "./Test.css";
import { useState, useEffect } from "react";
import Question from "./Question";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

function Test() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // 처음 movies의 내용이 없을 때! 비어있을때 한번만 실행되게
    if (Object.keys(movies).length === 0) {
      fetch("http://54.81.236.188/Result")
        .then((response) => response.json())
        .then((json) => {
          // json 내 movies 오브젝트 속 내용들을 Movies에 저장하기로 했습니다.
          setMovies(json.movies);
        });

      // movies의 내용이 있을 때!
    } else {
      스위치변경(false);
      // console.log(movies);
    }
  }, [movies]);

  const navigate = useNavigate();
  const [필터] = useState(Filter);
  const [질문] = useState(Question);
  const [번호, 번호변경] = useState(0);
  const [진행바, 진행바변경] = useState((100 * (번호 + 1)) / 질문.length);
  const [스위치, 스위치변경] = useState(true);
  const onClick = (event) => {
    let keyword = event.target.value;
    let 결과 = movies.filter((영화) => {
      return 영화.genre !== keyword;
    });

    setMovies(결과);

    번호변경(번호 + 1);
    진행바변경((100 * (번호 + 1)) / 질문.length);
    if (번호 === 질문.length - 1) {
      const randomValue = Math.floor(Math.random() * movies.length);
      const testResult = movies[randomValue];
      navigate("/Result", {
        state: {
          testResult,
        },
      });
      // window.location.reload();
    }
  };
  const 앞으로 = (event) => {
    번호변경(번호 - 1);
  };

  return (
    <div className="App">
      <header className="header"><img className="header--img" src="logo_movies.png" alt="logo" /></header>
      {스위치 ? (
        <Loading />
      ) : (
        <TestSection
          필터={필터}
          질문={질문}
          번호={번호}
          진행바={진행바}
          스위치={스위치}
          onClick={onClick}
          앞으로={앞으로}
        />
      )}
    </div>
  );
}

function TestSection({ 필터, 질문, 번호, 진행바, onClick, 앞으로 }) {
  return (
    <section className={"content start "}>
      <div className="content--question">
        <p className="content--question__box">{질문[번호].q}</p>

        <ProgressBar
          앞으로={앞으로}
          번호={번호}
          onClick={onClick}
          진행바={진행바}
        />
      </div>
      <div className="content--answer">
        <button
          className="content--answer__btn"
          value={필터[번호].b1}
          onClick={onClick}
        >
          {질문[번호].b1}
        </button>
        <button
          className="content--answer__btn"
          value={필터[번호].b2}
          onClick={onClick}
        >
          {질문[번호].b2}
        </button>
      </div>
    </section>
  );
}

function ProgressBar(props) {
  return (
    <div className="프로그래스바">
      <span className="프로그래스바--꺽쇠" onClick={props.앞으로}>
        &lt;{" "}
      </span>
      <span>{props.번호 + 1} | 7</span>
      <span className="프로그래스바--꺽쇠" onClick={props.onClick}>
        &gt;
      </span>
      <div className="프로그래스바--container">
        <progress value={props.진행바} max="100"></progress>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div>
      <p>로딩중입니다...</p>
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
    </div>
  );
}

export default Test;
