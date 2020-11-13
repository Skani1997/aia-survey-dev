import React from 'react';
import '../css/Main-review.css';

function MainReview(){
    return(
        <div className="review-container">
            <h1 className="review-title">드림캘린더 사용후기</h1>
            <div className="reviewbox-container">
                <div className="reviewbox">
                    <h1 className="reviewbox-title">드림캘린더 신청</h1>
                    <p className="reviewbox-description">신청양식에 맞춘 무료신청 OR 유료신청 신청양식에 맞춘 무료신청 OR 유료신청</p>
                </div>
                <div className="reviewbox">
                    <h1 className="reviewbox-title">드림캘린더 신청</h1>
                    <p className="reviewbox-description">신청양식에 맞춘 무료신청 OR 유료신청 신청양식에 맞춘 무료신청 OR 유료신청</p>                
                </div>
                <div className="reviewbox">
                    <h1 className="reviewbox-title">드림캘린더 신청</h1>
                    <p className="reviewbox-description">신청양식에 맞춘 무료신청 OR 유료신청 신청양식에 맞춘 무료신청 OR 유료신청</p>                
                </div>    
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