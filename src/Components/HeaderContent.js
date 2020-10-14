import React from 'react';
import '../css/HeaderContent.css';

function HeaderContent() {
    return (
        <div>
            <span className="description">
                당신의 꿈을 현실이 되도록.<br/>
                10명의 전문가가 꼼꼼히 작성하는 나만의 재무계획보고서
            </span>
            <h2 className="header-subtitle">당신의 꿈을 이뤄<span className="orange">드림</span></h2>
            <h1 className="header-title orange">드림캘린더</h1>
        </div>
    );
  }
  
  export default HeaderContent;