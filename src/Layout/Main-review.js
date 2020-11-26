import React from 'react';
import Reviewimg1 from '../image/reviewimg1.png'
import Reviewimg2 from '../image/reviewimg2.png'
import Reviewimg3 from '../image/reviewimg3.png'
import Slider from '@farbenmeer/react-spring-slider';
import '../css/Main-review.css';


function MainReview(){

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

    return(
        <div className="review-container">
            <h1 className="review-title">드림캘린더 사용후기</h1>
                <div className="slider-container">
                    <Slider className="reviewbox-slider"
                        hasArrows
                        hasBullets
                        BulletComponent={BulletComponent}
                        arrowStyle={arrowStyle}>
                            <div className="reviewbox-container">
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg1})`}}>
                                    <h1 className="reviewbox-title">이X은 (40대,사무직)</h1>
                                    <p className="reviewbox-description">
                                        사내 게시판에서 임직원 대상으로 진행한다고 하여<br/>
                                        받게 되었는데 그간 월급이 스쳐만 가는 것 같던게<br/>
                                        이제는 스스로 효율적으로 관리할 수 있게 되었어요</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg2})`}}>
                                    <h1 className="reviewbox-title">최x철 (50대,영업관리)</h1>
                                    <p className="reviewbox-description">
                                        나이가 나이인지라 10년 안에 내 집마련이 가능할까<br/>
                                        싶었는데, 친절한 상담으로 자신이 생겼습니다.<br/>
                                        효율적으로 관리해서 성공해보이겠습니다.</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg3})`}}>
                                    <h1 className="reviewbox-title">김X용 (30대,공무원)</h1>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!</p>
                                </div>
                            </div>
                            <div className="reviewbox-container">
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg1})`}}>
                                    <h1 className="reviewbox-title">이X은 (40대,사무직)</h1>
                                    <p className="reviewbox-description">
                                        사내 게시판에서 임직원 대상으로 진행한다고 하여<br/>
                                        받게 되었는데 그간 월급이 스쳐만 가는 것 같던게<br/>
                                        이제는 스스로 효율적으로 관리할 수 있게 되었어요</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg2})`}}>
                                    <h1 className="reviewbox-title">최x철 (50대,영업관리)</h1>
                                    <p className="reviewbox-description">
                                        나이가 나이인지라 10년 안에 내 집마련이 가능할까<br/>
                                        싶었는데, 친절한 상담으로 자신이 생겼습니다.<br/>
                                        효율적으로 관리해서 성공해보이겠습니다.</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg3})`}}>
                                    <h1 className="reviewbox-title">김X용 (30대,공무원)</h1>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!</p>
                                </div>
                            </div>
                            <div className="reviewbox-container">
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg1})`}}>
                                    <h1 className="reviewbox-title">이X은 (40대,사무직)</h1>
                                    <p className="reviewbox-description">
                                        사내 게시판에서 임직원 대상으로 진행한다고 하여<br/>
                                        받게 되었는데 그간 월급이 스쳐만 가는 것 같던게<br/>
                                        이제는 스스로 효율적으로 관리할 수 있게 되었어요</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg2})`}}>
                                    <h1 className="reviewbox-title">최x철 (50대,영업관리)</h1>
                                    <p className="reviewbox-description">
                                        나이가 나이인지라 10년 안에 내 집마련이 가능할까<br/>
                                        싶었는데, 친절한 상담으로 자신이 생겼습니다.<br/>
                                        효율적으로 관리해서 성공해보이겠습니다.</p>
                                </div>
                                <div className="reviewbox" style={{backgroundImage : `url(${Reviewimg3})`}}>
                                    <h1 className="reviewbox-title">김X용 (30대,공무원)</h1>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!</p>
                                </div>
                            </div>
                    </Slider>   
                </div>  
            <p className="review-description">
                꿈을 날짜와 함께 적어놓으면 그것은 목표가 되고, 목표를 잘게 나누면 그것은 계획이 되며,<br/>
                그 계획을 실행에 옮기면 꿈은 실현되는 것이다.<br/>
                당신의 꿈을 현실로 만들어줄 ‘나만의 드림캘린더’
            </p>
        </div>
    )
}


export default MainReview;