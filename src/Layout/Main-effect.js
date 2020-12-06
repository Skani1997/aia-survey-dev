import React from 'react';
import '../css/Main-effect.css';
import verticalLine from '../image/vertical-line.png'

function MainEffect(){
    return(
        <div className="effect-container">
            <h1 className="effect-title">드림캘린더 효과</h1>
            <img className="effect-vertical-line" src={verticalLine} alt=""/>
            <p className="effect-description1">
            2. 효과
            </p>  
            <p className="effect-description2">
                <strong>현재상황을 구체화하고 객관적으로 분석한 지표를 소유하는것만으로도 당신에겐 커다란 변화</strong>가 일어납니다.<br/>
                또한 거기에 더 나아가서 때론 냉정한 비교와 현실적인 수준을 파악함으로써<br/>
                허황된 계획을 버리고 구체적이며 조금 <strong>더 현실가능한 꿈을 그릴 수 있게 도와줍니다.</strong><br/>
                거기에 자신의 계획을 함께 이루어 나갈 수 있는 <strong>멘토의 조언을 받는 다면 아마 그 속도는 더욱 빨라질 것입니다.</strong>
            </p>
            
        </div>
    );
}

export default MainEffect;