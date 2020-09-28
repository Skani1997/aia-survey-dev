import React from 'react';
import '../css/Main-progress.css';
import ProgressIcons from '../Components/ProgressIcons';

function MainProgress() {
  return (
      <div className="main-container">
        <h1 className="progress-title">드림캘린더 제작과정</h1>
        <ProgressIcons></ProgressIcons>
      </div>
  );
}

export default MainProgress;