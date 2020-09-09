import React from 'react';
import '../css/Main-introduce.css';

function MainIntroduce(){
    return(
        <div className="introduce-container">
            <h1 className="introduce-title">저희는 이런 사람들 입니다</h1>
            <p className="introduce-description">
            온라인 재무검사를 통해 10명의 전문가들이<br/>
            분석 .작성하는 재무계획보고서 서비스입니다.<br/>
            재무설계가 필요한 분들이나, 돈관리가 필요한 분들에게 추천드립니다.
            </p>
        </div>
    );
}

export default MainIntroduce;