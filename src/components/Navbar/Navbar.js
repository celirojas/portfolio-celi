import React, {useState} from 'react';
import "./Navbar.css";
import NavMobile from '../NavMobile/NavMobile';

function Navbar(){
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    const handleScroll = (className) => {
        const element = document.querySelector(className);
        element.scrollIntoView();
        
    }

    return (
        <>
        <nav>
            <ul className='desktop-links'>
                <li onClick={() => handleScroll(".intro")}>About</li>
                <li onClick={() => handleScroll(".skills")}>Skills</li>
                <li onClick={() => handleScroll(".projects")}>Projects</li>
                <li onClick={() => handleScroll(".contact")}>Contact</li>
            </ul>
        </nav>
            <i onClick={handleClick} className="fas fa-bars" />
            {isVisible && <NavMobile handleScroll={handleScroll} handleIsVisible={setIsVisible}/>}            
        </>
    )
}

export default Navbar;