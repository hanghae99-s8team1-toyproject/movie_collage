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
      // console.log(movies);
    }
  }, [movies]);

  const navigate = useNavigate();
  const [필터] = useState(Filter);
  const [질문] = useState(Question);
  const [번호, 번호변경] = useState(0);
  const [진행바, 진행바변경] = useState((100 * (번호 + 1)) / 질문.length);

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
      <header className="header">모두의 영화</header>
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
    </div>
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

export default Test;
