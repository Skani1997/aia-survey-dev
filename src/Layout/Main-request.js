import React from 'react';
import '../css/Main-request.css';

function MainRequest(){
    return(
        <div className="main-request-container">
            <h1 className="request-title">드림캘린더 신청방법</h1>
            <p className="request-description">
                꿈에 날짜를 적고, 계획을 세운 다음 실행하면 당신의 꿈은 이루어집니다.<br/>
                여러분의 꿈을 이룰 수 있도록 나만의 드림캘린더를 그려보세요.
            </p>
            <div className="request-box-container">
                <div className="request-container-left">
                    <h1 className="request-box-title">무료 신청</h1>
                    <p className="request-box-description">
                        웹페이지 상 신청란에<br/>
                        구체적인 신청사유와<br/>
                        활용목적 작성 후 선정
                    </p>
                </div>
                <div className="request-container-right">
                    <h1 className="request-box-title">유료 신청</h1>
                    <p className="request-box-description">
                        드림캘린더 검사<br/>
                        유료 신청(1건당 1만원)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainRequest;