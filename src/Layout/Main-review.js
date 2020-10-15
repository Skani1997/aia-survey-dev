import React from 'react';
import '../css/Main-review.css';
import reviewbox from '../image/reviewbox.png'

function MainReview(){
    return(
        <div className="review-container">
            <h1 className="review-title">드림캘린더 사용후기</h1>
            <div className="reviewbox-container">
                <img src={reviewbox} alt=""></img>
                <img src={reviewbox} alt=""></img>
                <img src={reviewbox} alt=""></img>
            </div>
            <p className="review-description">
                꿈을 날짜와 함께 적어놓으면 그것은 목표가 되고, 목표를 잘게 나누면 그것은 계획이 되며,<br/>
                그 계획을 실행에 옮기면 꿈은 실현되는 것이다.<br/>
                당신의 꿈을 현실로 만들어줄 ‘나만의 드림캘린더’
            </p>
        </div>
    )
}

export default MainReview;