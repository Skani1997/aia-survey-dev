import React from 'react';
import '../css/Main-usage.css';
import verticalLine from '../image/vertical-line.png'

function MainUsage(){
    return(
        <div className="usage-container">
            <h1 className="usage-title">드림캘린더 활용방법</h1>
            <img className="usage-vertical-line" src={verticalLine} alt=""/>
            <p className="usage-description1">
            1. 활용방법
            </p>  
            <p className="usage-description2">
                드림캘린더에는 꿈을 이루는데 가장 필요한 돈을 어떻게 벌고, 모으고, 쓰고, 저축해야하는지에 대한 해결책과<br/>
                당신의 꿈을 월별, 연도별로 나누어 기록하고 피드백 할 수 있게 되어있습니다.<br/>
                이것을 자신의 소중한 일기장과 함께 주기적으로 살펴보며 달라지는 모습과 구체화되어가는 꿈을 기록함으로써<br/>
                직접 적고, 느끼며, 배우는 구체적인 핵심행동의 변화를 만들어냅니다.<br/>
                드림캘린더를 1년 혹은 최대 2년 마다 갱신하면서 변화를 기록하세요. <br/>
                그리고 다방면에서 성장해나가는 자신의 모습을 스스로 살펴보며 자존감을 높이고 목표와 꿈을 키워가세요.
            </p>
            
        </div>
    );
}

export default MainUsage;