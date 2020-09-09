import React from 'react';
import '../css/Main-recommend.css';
import person1 from '../image/person1.png'
import person2 from '../image/person2.png'
import person3 from '../image/person3.png'
import person4 from '../image/person4.png'
import person5 from '../image/person5.png'
import person6 from '../image/person6.png'
import dream from '../image/dream.png'

function MainRecommend(){
    return(
        <div className="recommend-container">
            <h1 className="recommend">
                이런 분들이 사용하면<br/>
                좋을 것 같아요!
            </h1>
            <div className="recommend-box1">
                <div className="box">
                    <img src={person1} alt=''></img>
                    <p>나름대로 하고는 있는데<br/>
                        돈 관리를 잘 하고 있는지<br/> 모르겠어요</p>
                </div>
                <div className="box">
                    <img src={person2} alt=''></img>
                    <p>저와 비슷한 사람들과<br/>
                        비교해보고 싶어요</p>
                </div>
                <div className="box">
                    <img src={person3} alt=''></img>
                    <p>어떻게 하면 돈 관리를<br/>
                        잘 할수 있을까요?</p>
                </div>
            </div>
            <div className="recommend-box2">
                <div className="box">
                    <img src={person4} alt=''></img>
                    <p>저한테 재무적인 환경의<br/>
                        변화가 생겼는데 어떻게 하죠?</p>
                </div>
                <div className="box">
                    <img src={person5} alt=''></img>
                    <p>지금까지 한번도 재무설계를 <br/>
                        받아보지 못해서 궁금해요</p>
                </div>
                <div className="box">
                    <img src={person6} alt=''></img>
                    <p>미래를 미리 대비하고 싶어요</p>
                </div>
            </div>
            <img className="dream" src={dream} alt=""></img>
        </div>
    );
}

export default MainRecommend;
