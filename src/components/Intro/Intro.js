import React from 'react';
import "./Intro.css";


function Intro(){
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hi, I'm Celina Rojas</h1>
                <h2>Web Developer</h2>
                <p>I am a web developer and translator. I love learning about languages and technology. I am studying at Digital House to become a Certified Tech Developer.</p>
                <a href="https://drive.google.com/file/d/1UTj3RpgDMJccM7CVV4MxTvsetezahMO0/view?usp=sharing" target="_blank" rel='noreferrer'>Download Resume</a>
            </div>
            <div className="intro-img">
                <img src="celiRojas.jpg" alt="profile" />
            </div>

        </div>
    )
}

export default Intro;