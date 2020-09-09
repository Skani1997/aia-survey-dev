import React from 'react';
import logo from '../image/logo1.png';
import mainImg from '../image/main_page_illust_entire.png';
import SurveyModal from '../Components/Surveymodal';
import '../css/Header.css';

function Header() {
  return (
    <header className="container">
      <nav className="menubar">
        <img className="logo"src={logo} alt=""></img>
      </nav>
      <div className="left-container">
        <span className="description">
          당신의 꿈을 현실이 되도록<br/>
          10명의 전문가가 꼼꼼히 작성하는 나만의 재무계획보고서
        </span>
        <h2 className="slogan">당신의 꿈을 이뤄<em>드림</em></h2>
        <h1 className="product-name">드림캘린더</h1>
        <SurveyModal></SurveyModal>
      </div>
      <div className="right-container">
        <img className="main-image" src={mainImg} alt=""></img>
      </div>
    </header>
  );
}

export default Header;
