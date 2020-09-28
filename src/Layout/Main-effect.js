import React from 'react';
import '../css/Main-effect.css';

function MainEffect(){
    return(
        <div className="effect-container">
            <p className="effect-description1">
            그래서 드림캘린더는 여러분께 적지 않은 질문을 합니다.<br/>
            여러분은 어떠한 꿈을 이루고 싶은지, 그 준비는 어느정도 되어 있는지,<br/>
            또 꿈을 위해 얼마만큼의 변화를 받아 드릴 수 있는지 등 말이지요.
            </p>
            <h1 className="effect-title">어떠한 효과가 있나요?</h1>
            <p className="effect-description2">
            그러면 질문에 대한 답을 토대로해서 10명의 전문가가 사회현상과 정책,<br/> 
            금융환경, 재무설계적 이론에 기초하여 여러분을 위한 꿈 달력을 만들어 드립니다.
            </p>
        </div>
    );
}

export default MainEffect;