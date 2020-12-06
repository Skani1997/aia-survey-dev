import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import '../css/Main-review.css';


function MainReview(){

    const arrowStyle = { border: "solid #A4734B", borderWidth: "0 5px 5px 0" };

    return(
        <div className="review-container">
            <h1 className="review-title">드림캘린더 사용후기</h1>
                <div className="slider-container">
                    <Slider className="reviewbox-slider"
                        hasArrows
                        arrowStyle={arrowStyle}>
                            <div className="reviewbox-container">
                                <div className="reviewbox">
                                    <h1 className="reviewbox-title">알찬 상담이었어요</h1>
                                    <p className="reviewbox-name">오** 님</p>
                                    <p className="reviewbox-description">
                                        재무상담 처음 받아보는데 상담 자체에 기대를 많이 안했었거든요<br/>
                                        상담사님하고 상담받고 이것저것 바꿀것도 있었고 제가 몰랐던 부분도 많이<br/>
                                        알려주셔서 상담받으면서 진짜 도움을 많이 받았어요
                                    </p>
                                </div>
                            </div>
                            <div className="reviewbox-container">
                            <div className="reviewbox">
                                    <h1 className="reviewbox-title">상담 딱 좋네요</h1>
                                    <p className="reviewbox-name">최** 님</p>
                                    <p className="reviewbox-description">
                                        평소에 과소비도 좀 심하고 저축도 잘 못하는 편이라 도움을 받고 싶었었는데<br/>
                                        저같은 사람한테 딱 맞는 상담이엇어요
                                    </p>
                                </div>
                            </div>
                            <div className="reviewbox-container">
                                <div className="reviewbox">
                                    <h1 className="reviewbox-title">상담 꼭 받으세요</h1>
                                    <p className="reviewbox-name">우** 님</p>
                                    <p className="reviewbox-description">
                                        재테크 1도 모르는 사람인데 이런거 받아보면 어떻게 좀 나아질까 상담받았어요<br/>
                                        사람에 맞게 상담을 딱딱 해주셔서 저는 힘안들이고 체계적으로<br/>
                                        잘 정리할 수 있었어요
                                    </p>
                                </div>
                            </div>
                    </Slider>   
                </div>  
            <p className="review-description">
                "꿈을 날짜와 함께 적어놓으면 그것은 목표가 되고, 목표를 잘게 나누면 그것은 계획이 되며,<br/>
                그 계획을 실행에 옮기면 꿈은 실현되는 것이다.<br/>
                당신의 꿈을 현실로 만들어줄 ‘나만의 드림캘린더’"
            </p>
        </div>
    )
}


export default MainReview;