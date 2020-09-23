import React from 'react';
import logo from '../image/logo1.png'
import "../css/HeaderNav.css"

function HeaderNav() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt=""></img>
            <div className="menu">
                <ul>
                    <li>상담요청</li>
                    <li>설문하기</li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default HeaderNav;