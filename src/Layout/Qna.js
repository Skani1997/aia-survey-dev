import React from 'react';
import '../css/Qna.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Qna(){
    return(
        <div className="qna-container">
            <h1 className="qna-title">드림캘린더 Q&A</h1>
            <p className="qna-description">
            드림캘린더를 사용하면서 굼금한 점에 대해<br/>
            답변합니다 Q&A를 참고하여 고객님의 <br/>
            궁금한 점을 해결해보세요.
            </p>
            <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="qna-slider-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="qna-carousel"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
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
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass="qna-slider"
            slidesToSlide={1}
            swipeable
            >
            <div className="qna-box">
                <h1 className="qna-box-title">Q1. 멘토 신청시 전문가분들은 어떤분들인가요?</h1>
                <p className="qna-box-description">
                드림캘린더와 전략적 제휴관계인 ㈜한국재무설계의 에이전트들은 사실<br/>
                상 시간당 상담료를 받고 재정적 자문을 해주는 AFPK(한국재무설계사) <br/>
                자격증 보유 인력들입니다. 드림캘린더와 전략적 제휴로 자문료를 지급<br/>
                하기에 무료로 유선/화상 상담 서비스를 제공합니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q2. 저는 꿈이 없는데 신청해도 될까요?</h1>
                <p className="qna-box-description">
                사실 지금 세상에 목표와 꿈을 구분하기는 힘들지만 명확한 꿈을 갖고
                 살아가는 사람은 많지 않습니다. 경험과 정보가 없기 때문이죠. 드림캘린
                 더를 만드는것만으로 꿈이 생기진 않지만 적어도 그 시작을 함께 할 수
                 는 있습니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q3. 다른 곳에서 비슷한 보고서를 받은 적이 있는데<br/>또 받아도 되나요?</h1>
                <p className="qna-box-description">
                물론 모든 것은 각자의 선택입니다. 다만 드림캘린더는 단순한 재정분석<br/>
                보다는 인간의 기초적인 욕구인 자아실현에 초점을 둡니다. 재정상황과 <br/>
                습관의 변화를 통해서 여러분의 꿈을 이루는데 도움을 드리는 것이 목적<br/>
                이니 그 배경자체가 다르다고 볼 수 있습니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q4. 멘토링 신청시 추천받은 금융상품을<br/>
                꼭 가입해야 하나요?</h1>
                <p className="qna-box-description">
                아니요. 드림캘린더는 약속합니다. 어느 한 곳에 치우치지 않는 객관적인 <br/>
                지표와 전문적인 조언으로 고객의 선택을 돕습니다. 신청자의 요청이 없다면 <br/>
                멘토는 1차 멘토링에서 더 이상 진행하지 않습니다. 모든 선택은 <br/>
                드림캘린더 주인의 몫입니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q5. 드림캘린더는 왜 무료인가요?</h1>
                <p className="qna-box-description">
                물론 기업체의 단체 서비스 계약 같은경우는 전건 유료로 진행됩니다.<br/>
                새로운 플랫폼의 서비스를 시작하는 만큼 히스토리를 쌓고 경험을 모으기 <br/>
                위함입니다. 또한 2년에 한번씩 수집동의된 정보를 바탕으로 꿈 이룸 <br/>
                보고서를 출간하여 더 큰 플랫폼 비즈니스로 도약을 준비하고 있습니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q6. 신청사연은 꼭 써야하나요?</h1>
                <p className="qna-box-description">
                물론입니다. 단순히 레포트만 받아보고 싶다면 유료로 신청하시면 됩니다.<br/> 
                저희는 드림캘린더를 사용하는 한사람 한사람이 변화되는 모습을 꿈 꿉니다. <br/>
                그렇기 위해선 드림캘린더를 사용하는 사람이 어떤 사람인지 알아야 <br/>
                적극적으로 도와드릴 수 있습니다.
                </p>
            </div>
            <div className="qna-box">
                <h1 className="qna-box-title">Q7. 기존의 재무설계와 어떤 것이 다른가요?</h1>
                <p className="qna-box-description">
                우선 10년 간 5,000명 이상의 상담 자료를 베이스로 한 알고리즘으로 <br/>
                아무나 흉내낼 수 없는 탄탄한 데이터베이스로 제작되었습니다. 또한 <br/>
                최신화된 기법으로 검사자가 입력한 금융정보에 따라 가장 적합한 Data를 <br/>
                실시간으로 매칭, 도식합니다. 또한 그 과정의 끝이 단순한 금융상품의 <br/>
                가입이 아닌 드림캘린더를 통해 사용자가 목표와 꿈에 다다르게 하는 것이 <br/>
                가장 큰 차이입니다.
                </p>
            </div>
            </Carousel>
        </div> 
    );
}

export default Qna;