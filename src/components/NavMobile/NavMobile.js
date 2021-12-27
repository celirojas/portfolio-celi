import React from "react";
import './NavMobile.css';

function NavMobile(props){   
    const {handleScroll, handleIsVisible} = props;

    const handleClick = (className) => {
        handleScroll(className);
        handleIsVisible(false);
    }

    return (
        <div className="nav-mobile">
            <ul className="mobile-links">
                <li onClick={() => handleClick(".intro")}>About</li>
                <li onClick={() => handleClick(".skills")}>Skills</li>
                <li onClick={() => handleClick(".projects")}>Projects</li>
                <li onClick={() => handleClick(".contact")}>Contact</li>
            </ul>
        </div>
    )
}

export default NavMobile;