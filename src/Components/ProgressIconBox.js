import React from 'react';
import '../css/ProgressIconBox.css';

function ProgressIconBox(props){
    return(
        <div className="progressbox-container">
            <img className="progressbox-img" src={props.img} alt=""/>
            <div className="progressbox-innercontainer">
                <button className="progressbox-title">{props.title}</button>
                {/* eslint-disable-next-line*/}
                <p className="progressbox-description" dangerouslySetInnerHTML={{__html: props.description.replace(new RegExp('\n', 'g') , '<br/>')}}/>
            </div>
        </div>
    );
}

export default ProgressIconBox;