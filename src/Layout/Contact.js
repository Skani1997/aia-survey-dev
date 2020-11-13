import React from 'react';
import Footer from './Footer'
import '../css/Contact.css';

function Contact(){
    return(
        <>
        <div className="contact-container">
            <h1>고객 문의</h1>
            <p>혹시 궁금한 점이 있으시다면 연락주세요!</p>
            <form className="contact-form" id="contact">
                <div className="form-container">
                    <div className="form-left"><input type="text" name="company" placeholder="상호"/></div>
                    <div className="form-right"><input type="text" name="name" placeholder="이름"/></div>                    </div>
                <div className="form-container">
                    <div className="form-left"><input type="text" name="call" placeholder="연락처"/></div>
                    <div className="form-right"><input type="text" name="sort" placeholder="문의 종류"/></div>
                </div>
                <textarea className="contact-content" rows="8" cols="90" placeholder="문의 내용"></textarea> 
            </form>
            <button className="submit-btn" type="submit" form="contact">고객 문의</button>
            
        </div>
        <Footer></Footer>
        </>
    );
}

export default Contact;