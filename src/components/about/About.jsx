import React from 'react';
import './about.css'
import naruto from '../../img/naruto.png';
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src={naruto} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                It is a great experience changing from pure developpment to reasearch. Still i can't take apart one from the other. I decided to Do both.
                </p>
                <p className='a-desc'>
                    Coming from manzal tamim a city from the north tunisia. I was antuthiastic about computer science from high school.
                    I got my bachelor degree in computer science. My passion for computer science guided me to apply in Higher computer science to polish my skills and get new knoledge about this vast field.
                    By the end of 2017 i got my first collage Computer Science degree.<br/><br/>
                    By that time Artificial intelligence became more popular So i applied for A masters In AI. 
                    My passion for research helped me in learning new technologies like React and DevOps.
                </p>
            </div>
        </div>
    )
}

export default About
