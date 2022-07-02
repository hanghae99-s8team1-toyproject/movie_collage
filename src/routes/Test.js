import "./Test.css";
import { useState, useEffect } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [질문, 질문변경] = useState(Question);
  const [번호, 번호변경] = useState(0);
  const [진행바, 진행바변경] = useState(100*(번호+1)/질문.length)
  const onClick = (event) => {
    번호변경(번호 + 1);
    진행바변경(100*(번호+1)/질문.length)
    if (번호 === 질문.length - 1) {
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

  const 앞으로 =()=>{
    번호변경(번호-1)
  }

  const 뒤로 =()=>{
    번호변경(번호+1)
  }

  return (
    <div className="App">
      <header className="header">모두의 영화</header>
      <section className={"content start " + fade}>
        <div className="content--question">
          <p className="content--question__box">{질문[번호].q}</p>
          <div className="프로그래스바">
          <span className="프로그래스바--꺽쇠" onClick={뒤로}>&lt; </span> 
          <span>1 | 5</span>
           <span className="프로그래스바--꺽쇠" onClick={앞으로}>&gt;</span>
            <div className="프로그래스바--container">
            <progress value={진행바} max="100"></progress>
              </div>
          
           
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
