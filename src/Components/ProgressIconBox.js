import React from 'react';
import '../css/ProgressIconBox.css';

function ProgressIconBox(props){
    return(
        <div>
            <img className="progressbox-img" src={props.img} alt=""/>
            <h1 className="progressbox-title">{props.title}</h1>
            <p className="progressbox-description">{props.description}</p>
        </div>
    );
}

export default ProgressIconBox;