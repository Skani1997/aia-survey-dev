import React from 'react';
import '../css/ProgressIcons.css';
import ProgressIconBox from "../Components/ProgressIconBox";
import Progress1 from '../image/progress1.png'
import Progress2 from '../image/progress2.png'
import Progress3 from '../image/progress3.png'
import Progress4 from '../image/progress4.png'
import Progress5 from '../image/progress5.png'

function ProgressIcons() {
  return (
      <div>
          <div className="progress-container1">
              <ProgressIconBox img={Progress1} title="드림캘린더 신청" description="신청양식에 맞춘 무료신청 OR 유료신청"></ProgressIconBox>
              <ProgressIconBox img={Progress2} title="라이프 현황 조사" description="재무현황·인생목표·라이프스타일 작성"></ProgressIconBox>
              <ProgressIconBox img={Progress3} title="보고서 작성" description="최신화된 통계치 대차대조,전문가 제언 및 분석"></ProgressIconBox>

          </div>
          <div className="progress-container2">
          <ProgressIconBox img={Progress4} title="드림캘린더 완성" description="수령방법 선택"></ProgressIconBox>
          <ProgressIconBox img={Progress5} title="액션플랜 수행" description="서포터즈 면담 신청"></ProgressIconBox>
          </div>
      </div>
  );
}

export default ProgressIcons;