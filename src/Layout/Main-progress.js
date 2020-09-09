import React from 'react';
import '../css/Main-progress.css';
import rightArrow from '../image/rignt_arrow.png';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import icon4 from '../image/icon4.png';

function MainProgress() {
  return (
      <div className="main-container">
        <div className="description-section">
          <h2 className="description-title">드림캘린더는요..</h2>
          <p className="description-product">
            온라인 재무검사를 통해 10명의 전문가들이<br/>
            분석 .작성하는 재무계획보고서 서비스입니다.<br/>
            재무설계가 필요한 분들이나, 돈관리가 필요한 분들에게 추천드립니다.<br/>
          </p>
        </div>
        <div className="icon-section">
          <div class="left-icon-container">
            <div className="icon-container">
              <img src={icon1} alt=""></img>
              <img className="right-arrow" src={rightArrow} alt=""></img>
              <img src={icon2} alt=""></img>
              <img className="right-arrow" src={rightArrow} alt=""></img>
              <img src={icon3} alt=""></img>
            </div>
            <div className="comment-container">
              <p>서비스 접속</p>
              <p>온라인 재무검사</p>
              <p>분석, 제작</p>
            </div>
            <hr className="left-hr"></hr>
            <p className="comment">검사가 완료된 시점으로부터 6일 이내 분석 완료</p>
          </div>
         <div class="right-icon-container">
            <div className="icon-box icon4-comment">
              <img src={icon4} alt=""></img>
              <p className="icon-comment">보고서 발송</p>                
              <hr className="right-hr"></hr>
              <p className="comment">분석된 보고서는 4일 이내 발송 완료</p>
            </div>  
          </div>
        </div>
      </div>
  );
}

export default MainProgress;