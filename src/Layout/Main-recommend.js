import React from 'react';
import '../css/Main-recommend.css';
import person1 from '../image/person1.png';

function MainRecommend(){
    return(
        <div className="recommend-container">
            <h1 className="recommend">
                이런 분들에게 반드시 필요합니다
            </h1>
            <div className="recommend-box1">
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>꿈이요? 너무 막연해요<br/>
                        사실 제가 뭘 하고 싶은지 모르겠어요
                    </p>
                </div>
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>
                    전 나름 노력하고 있는데<br/>
                    결코 제 꿈을 이루기는 쉽지 않을 것 같아요
                    </p>
                </div>
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>어떻게 하면 돈 관리를<br/>
                        잘 할 수 있는지 모르겠어요</p>
                </div>
            </div>
            <div className="recommend-box2">
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>막연한 미래를 잘 대비하고<br/>
                    구체적으로 계획을 세우고 싶어요</p>
                </div>
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>저와 비슷한 사람들과 비교해서 <br/>
                    제가 잘 하고 있는지 확인하고 싶어요</p>
                </div>
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>어디에도 명쾌한 재무적<br/>
                    방향성을 잡지 못하겠어요</p>
                </div>
            </div>
        </div>
    );
}

export default MainRecommend;
