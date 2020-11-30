import React from 'react';
import '../css/Main-request.css';
import howtoimg1 from '../image/howtoimg1.png';
import howtoimg2 from '../image/howtoimg2.png';

function MainRequest(){
    return(
        <div className="main-request-container">
            <h1 className="request-title">드림캘린더 신청방법</h1>
            <p className="request-description">
            정말 이루고 싶은 꿈과 고민, 현재 자신의 상황을 양식에 맞게 적어주시는 분께는 무료로 드림캘린더를 제공해드립니다.<br/>
            드림캘린더는 그러한 사람들의 많은 꿈을 모아 2년에 한번씩 대한민국 재무&꿈 실태조사 보고서를 발간합니다.<br/>
            다소 시간이 소요되는 신청양식 작성없이 본인의 재무상황과 알고리즘과 최신화된 금융데이터와 대차대조한 재무설계보고서를<br/>
            받아보고 싶으신 분은 유료로 신청하시면 편리하게 이용하실 수 있습니다.
            </p>
            <div className="request-box-container">
                <div className="request-container-left">
                    <h1 className="request-box-title">무료 신청</h1>
                    <img className="howtoimg" src={howtoimg1} alt=""></img>
                    <p className="request-box-description">
                        드림캘린더 페이지에서 <br/>바로 신청하세요<br/>
                        신청사유, 당신이 가진 꿈, <br/>과거의 경험 등
                        몇가지 제시되는 <br/>질문으로 당신을 소개해주세요.<br/>
                        간단한 리뷰를 거쳐 최소한의 <br/>기준점만 넘으면<br/>
                        드림캘린더를 받아 볼 수 있습니다.
                    </p>
                </div>
                <div className="request-container-right">
                    <h1 className="request-box-title">유료 신청</h1>
                    <img className="howtoimg" src={howtoimg2} alt=""></img>
                    <p className="request-box-description">
                        드림캘린더 검사 유료신청<br/>
                        검사프로그램+검사결과<br/>
                        (드림캘린더 PDF 전송)+<br/>
                        설문 전 전문상담원 가이드<br/>
                        (￦ 12,900원)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainRequest;