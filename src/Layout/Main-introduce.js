import React from 'react';
import '../css/Main-introduce.css';
//import IconBar from '../Components/IconBar' <IconBar></IconBar>

function MainIntroduce(){
    return(
        <div className="introduce-container">                   
            <h1 className="introduce-title">당신의 꿈이 현실이 되도록</h1>
            <p className="introduce-description">
            당신에게 던지는 150개의 질문과 현재 Trend가 당신에게 맞게끔 최적화된 알고리즘을 타고 11명의 전문가가<br/>
            꼼꼼하게 검토하여 당신만을 위한 꿈 이룸 달력을 선물합니다.
            </p>
        </div>
    );
}

export default MainIntroduce;