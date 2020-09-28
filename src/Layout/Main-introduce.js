import React from 'react';
import '../css/Main-introduce.css';
import IconBar from '../Components/IconBar';


function MainIntroduce(){
    return(
        <div className="introduce-container">
            <IconBar></IconBar>          
            <h1 className="introduce-title">드림캘린더는요...</h1>
            <p className="introduce-description">
            누구나 꿈을 꾸지만 그 꿈을 이루는 사람은 매우 적습니다.<br/>             
            건강해지는 꿈, 좋은 집에 사는 꿈, 전세계를 여행하는 꿈, 건물주가 되는 꿈 같은 것들 말이죠.<br/>
            또는 지금 거친 현실을 벗어나고 편안하고 행복한 삶을 사는 꿈을 꾸기도 합니다.<br/>
            그러한 꿈들을 이룰 수 있게 도와드리는 ‘나만의 꿈달력’입니다.
            </p>
        </div>
    );
}

export default MainIntroduce;