import React from 'react';
import '../css/Footer.css';
import Footerlogo from '../image/footerlogo.png'

function Footer(){
    return(
        <div className="footer-container">
            <img className="footerlogo" src={Footerlogo} alt=""/> 
            <p className="footer-address">(우)11111 경기도 경기시 경기로 땡땡땡 와</p>
            <p className="footer-tell">TEL : 02-000-0000 |  FAX : 000-000-0000 |  E-mail : 000000@00000</p>
            <p className="footer-copyright">Copyright (c) 2020 where where wheeeeee. All Rights reserved.</p>      
        </div>
    );
}

export default Footer;