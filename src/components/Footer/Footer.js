import React from 'react';
import "./Footer.css";

function Footer(){
    return (
        <footer className='contact'>
            <ul>
                <li><a href='https://www.linkedin.com/in/celina-rojas' target="_blank"><i className="fab fa-linkedin" /></a></li>
                <li><a href='https://github.com/celirojas' target="_blank"><i className="fab fa-github" /></a></li>
                <li><a href='mailto:mcelinarojas@gmail.com'><i className="fas fa-envelope-square" /></a></li>
            </ul>
            <span>Celina Rojas 2021</span>  
        </footer>
    )
}

export default Footer;