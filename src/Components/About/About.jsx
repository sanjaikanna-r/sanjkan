import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profilem from '../../assets/profiles.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} alt="" />
        </div>
        <div className='about-section'>
            <div className="about-left">
                <img className="aboutpro"src={profilem} alt="" />
                <h1>Hey Welcome to my page</h1>
            </div>
            <div className="about-right">
                <div className="aboutpara">
                    <p>I am exp front end developer with react js library</p>
                    <p>my passion is an becoming the java full stack developer</p>
                    <p></p>
                </div>
                <div className="about-skills">
                    <div className="aboutskill"><p>HTML&CSS - Advanced</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                    <div className="aboutskill"><p>Javascript - intermediate</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                    <div className="aboutskill"><p>Core java - intermediate</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                    <div className="aboutskill"><p>SQL - intermediate</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                    <div className="aboutskill"><p>Data Structure and algorithm - Basics</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                    <div className="aboutskill"><p>React js - Basics</p><hr /><div className="skill-bar" style={{ width: '50%' }}></div></div>
                </div>
            </div>
        </div>
      <div className="about-achievements">
        <div className='about-achievement'>
            <h1>0-1</h1>
            <p>Years of experience</p>
        </div>
        <hr />
        <div className='about-achievement'>
            <h1>10+</h1>
            <p>Projects</p>
        </div>
        <hr />
        <div className='about-achievement'>
            <h1>15+</h1>
            <p>happy clients</p>
        </div>


      </div>
    </div>
  )
}

export default About
