import React from 'react';
import '../css/ProgressIcons.css';
import ProgressIconBox from "../Components/ProgressIconBox";
import Progress1 from '../image/progress1.png';
import Progress2 from '../image/progress2.png';
import Progress3 from '../image/progress3.png';
import Progress4 from '../image/progress4.png';
import Progress5 from '../image/progress5.png';
import Slider from '@farbenmeer/react-spring-slider';

function ProgressIcons() {

  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "25px",
        backgroundColor: "#A4734B",
        margin: "0 7px",
        opacity: isActive ? undefined : "0.5",
      }}
      onClick={onClick}
    />
  );
  
  const arrowStyle = { border: "solid #A4734B", borderWidth: "0 5px 5px 0" };

  return (
      <div>
          <div className="slider">
            <Slider 
              activeIndex={5}
              hasBullets
              hasArrows
              BulletComponent={BulletComponent}
              arrowStyle={arrowStyle}>
                <ProgressIconBox img={Progress1} title="드림캘린더 신청" 
                  description="드림캘린더 웹페이지를 통해 신청<br/>
                      방법 하나. 신청양식을 작성하는 무료신청<br/>
                      방법 둘. 신청양식 작성을 하지 않는 유료신청<br/>
                      *신청 후 전문상담원의 가이드에 따라 안내받고"></ProgressIconBox>
                <ProgressIconBox img={Progress2} title="라이프 현황 조사" 
                  description="기본정보입력•목표설정검사•<br/>
                    투자성향검사•재무상태검사•<br/>
                    라이프스타일 등 9종 검사"></ProgressIconBox>
                <ProgressIconBox img={Progress3} title="보고서 작성" 
                  description="금융 데이터 스크래핑을 통한 <br/>
                    신청자 개인상황•분위별 대차대조,<br/>
                    꿈 현실화 데이터 분석, 전문가 개별 제언 등<br/>
                    알고리즘+전문가주관평가 혼합 작성"></ProgressIconBox>
                <ProgressIconBox img={Progress4} title="드림캘린더 완성" 
                  description="수령(보고서형식 우편 or PDF 전자메일 발송)<br/>
                    및 드림캘린더 사용방법 안내"></ProgressIconBox>
                <ProgressIconBox img={Progress5} title="액션플랜 수행" 
                  description="서포터즈의 3개월, 6개월 단위 액션플랜 수행 점검<br/>
                    신청자 의사에 따라 드림캘린더 전략적 제휴사<br/> 
                    ㈜한국재무설계 전문가 매칭"></ProgressIconBox>
            </Slider>
          </div>
      </div>
  );
}

export default ProgressIcons;