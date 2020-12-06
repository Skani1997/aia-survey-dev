import React from 'react';
import '../css/Main-introduce.css';
import verticalLine from '../image/vertical-line.png'
//import IconBar from '../Components/IconBar' <IconBar></IconBar>

function MainIntroduce(){
    return(
        <div className="introduce-container">                   
            <h1 className="introduce-title">드림캘린더는 질문합니다</h1>
            <p className="introduce-description">
                드림캘린더는 당신에게 150가지의 질문을 던집니다.<br/>
                그리고 당신은 고민하고 그 질문에 성실하게 <br/>답변을 작성합니다.<br/>
                물론, 어느정도 준비도 필요하겠죠?
            </p>
            <p className="introduce-description">
                모르는 것이 있다면?<br/>
                자세한 해석과 설명을 해준 전문 플래너가 <br/>당신을 조력합니다.<br/>
                이 과정이 지나면 당신은 <br/>당신의 꿈이 어떻게 이루어지게 될지,
                또 그 안에 어떤 위험이 도사리고 있는지<br/>
                하나의 비스포크 캘린더로 당신의 손에 쥐어지게 됩니다.
            </p>
            <img className="vertical-line" src={verticalLine} alt=""/>
        </div>
    );
}

export default MainIntroduce;
