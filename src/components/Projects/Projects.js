import React from 'react';
import Card from '../Card/Card';
import "./Projects.css";


function Projects(){
    return (
        <div className='projects'>
            <h2 className='projects-title'>Projects</h2>
            <Card
                title="Florida Cupcakes"
                year="2020"
                description="I developed this project to practice my markup ans styling habilities with HTML and CSS. It’s a mock up for a landing page for a cupcake store." 
                image="fc1.png"
                link="coco.com"
            />
            <Card
                title="Museum of Candy"
                year="2020"
                description="I built this project as part of a Udemy course. It is built using Bootstrap." 
                image="mc1.png"
                link="mecoco.com"
             />
        </div>
    )
}

export default Projects;