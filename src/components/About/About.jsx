import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import about_img from "../../assets/final.png"

const About = () => {
    return (
        <div id='about' className = 'about'>
         <div className="about-title">
            <h1>About Me</h1>
            <img src ={theme_pattern} alt = ''/>
         </div>
         <div className="about-sections">
            <div className="about-left">
                <img src={about_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Curious about how technology shapes our world, </p>
                    <p>I dive into code and creativity.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style = {{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style = {{width:"75%"}} /></div>
                    <div className="about-skill"><p>Data Structures & Algorithms</p><hr style = {{width:"70%"}} /></div>
                    <div className="about-skill"><p>MySQL</p><hr style = {{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style = {{width:"50%"}} /></div>
                    <div className="about-skill"><p>Express JS</p><hr style = {{width:"50%"}} /></div>
                </div>
            </div>
         </div>
         <div className="about-achievements">
            <div className="about-achievement">
                <h1>400+</h1>
                <p>LeetCode Qoestions</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8.41</h1>
                <p>Average CGPA</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>TOP 5% rank</h1>
                <p>in JEE Exam</p>
            </div>
         </div>
        </div>
    )
}

export default About