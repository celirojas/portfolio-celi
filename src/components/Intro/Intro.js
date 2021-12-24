import React from 'react';
import "./Intro.css";


function Intro(){
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hi, I'm Celina Rojas</h1>
                <h2>Web Developer</h2>
                <p>I am a web developer and translator. I love learning about languages and technology. I’m studying at Digital House to become a Certified Tech Developer.</p>
                <a href="#" target="_blank">Download Resume</a>
            </div>
            <div className="intro-img">
                <img src="celinaRojas.jpg" alt="profile" />
            </div>

        </div>
    )
}

export default Intro;