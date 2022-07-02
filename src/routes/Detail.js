import React, { useState, useEffect } from 'react';
import './Detail.css';

function Detail(props){

  return (
    <div className='container--detail'>
      <div className='detail--background'>
        <div className='detail--background__left'>
          테스트
        </div>
        <div className='detail--background__right'>
          데스와
          <button onClick={props.close}>창 닫기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;