import React from 'react';
import '../css/ProgressIconBox.css';

function ProgressIconBox(props){
    return(
        <div className="progressbox-container">
            <img className="progressbox-img" src={props.img} alt=""/>
            <div className="progressbox-innercontainer">
                <button className="progressbox-title">{props.title}</button>
                <p className="progressbox-description">{props.description}</p>
            </div>
        </div>
    );
}

export default ProgressIconBox;