import React, { useState, useEffect } from 'react';
import './Detail.css';

function Detail(props){
// src={"asdgasg"}
  return (
    <div className='container--detail'>
      <div className='detail--background'>
        <div className='detail--background__L'>
          <img className='detail--background__L__poster' alt="movie poster image" />
        </div>
        <div className='detail--background__R'>
          <h1 className='detail--background__R__title'></h1>
          <h2 className='detail--background__R__entitle'></h2>
          <ul className="detail--background__R__explain">
            <li className="R__explain__year"></li>
            <li className="R__explain__watchrate"></li>
            <li className="R__explain__time"></li>
          </ul>
          <div className='detail--background__R__detail'>
            <dl>
              <dt>감독</dt>
              <dd>{}</dd>
            </dl>
            <dl>
              <dt>출연</dt>
              <dd>{}</dd>
            </dl>
            <dl>
              <dt>키워드</dt>
              <dd>{}</dd>
            </dl>
            <dl>
              <dt>시놉시스</dt>
              <dd>{}</dd>
            </dl>
            <dl>
              <dt>줄거리</dt>
              <dd></dd>
            </dl>
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