import React from 'react';
import logo from '../image/dreamcalenderLogo.png'
import "../css/HeaderNav.css"

function HeaderNav() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt=""></img>
            <div className="menu">
                <ul>
                    <li>드림캘린더 신청</li>
                    <li>코드등록 & 검사하기</li>
                    <li>고객센터
                        <ul class="sub">
                        {/* eslint-disable-next-line*/}
                        <li><a href="#">공지사항</a></li>
                        {/* eslint-disable-next-line*/}
                        <li><a href="#">질문답변</a></li>
                        {/* eslint-disable-next-line*/}
                        <li><a href="#">상담후기</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default HeaderNav;