import React from 'react';
import '../css/Main-review.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function MainReview(){

    return(
        <div className="review-container">
            <h1 className="review-title">드림캘린더 사용후기</h1>
                <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="review-item"
                keyBoardControl
                partialVisbile
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 5000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 0
                  }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                                 <div className="reviewbox1">
                                    <p className="reviewbox-name">오** 님</p>
                                    <p className="reviewbox-description">
                                        사내 게시판에서 임직원 대상으로 진행한다고 하여<br/>
                                        받게 되었는데 그간 월급이 스쳐만 가는 것 같던게<br/>
                                        이제는 스스로 효율적으로 관리할 수 있게 되었어요
                                    </p>
                                </div>
                                <div className="reviewbox2">
                                    <p className="reviewbox-name">최** 님</p>
                                    <p className="reviewbox-description">
                                        나이가 나이인지라 10년 안에 내 집마련이 가능할까<br/>
                                        싶었는데, 친절한 상담으로 자신이 생겼습니다.<br/>
                                        효율적으로 관리해서 성공해보이겠습니다.
                                    </p>
                                </div>
                                <div className="reviewbox3">
                                    <p className="reviewbox-name">우** 님</p>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!
                                    </p>
                                </div>  
                                <div className="reviewbox1">
                                    <p className="reviewbox-name">김** 님</p>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!
                                    </p>
                                </div>  
                                <div className="reviewbox2">
                                    <p className="reviewbox-name">박** 님</p>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!
                                    </p>
                                </div>  
                                <div className="reviewbox3">
                                    <p className="reviewbox-name">한** 님</p>
                                    <p className="reviewbox-description">
                                        인생 전반에 대한 재무 플랜을 짤 수 있는 좋은 시간<br/>
                                        이었던 것 같습니다. 결혼을 하고 두 사람의 월급을<br/>
                                        관리하기에 어려웠는데 도움이 되었어요!
                                    </p>
                                </div> 
                </Carousel>
            <p className="review-description">
                "꿈을 날짜와 함께 적어놓으면 그것은 목표가 되고, 목표를 잘게 나누면 그것은 계획이 되며,<br/>
                그 계획을 실행에 옮기면 꿈은 실현되는 것이다.<br/>
                당신의 꿈을 현실로 만들어줄 ‘나만의 드림캘린더’"
            </p>
        </div>
    );
}


export default MainReview;