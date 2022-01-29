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
                link="https://celirojas.github.io/proyectoCoder/htmls/index"
            />
            <Card
                title="Pokedex"
                year="2021"
                description="I built this project as part of a Udemy course. It is built using React." 
                image="pokedex.png"
                link="https://rpqfw.csb.app/"
             />
            <Card
                title="ScoreKeeper"
                year="2021"
                description="I built this project as part of a Udemy course. It is built using JavaScript." 
                image="scoreKeeper.png"
                link="https://celirojas.github.io/scoreKeeper/index"
             />
        </div>
    )
}

export default Projects;