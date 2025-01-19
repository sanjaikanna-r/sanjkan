import React from 'react'
import './Hero.css'
import pro from '../../assets/profiles.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='proo' src={pro} alt="" />
        <h1> <span>I am sanjai Kanna,</span> Java Full stack developer.</h1>
        <p> Sanjai Kanna R is a skilled web developer pursuing a B.Tech in Information Technology with a 9.00 CGPA at SNS College of Technology. Proficient in HTML, CSS, JavaScript, Core Java, JDBC, Hibernate, and SQL, he has hands-on experience with VS Code, Figma, and Bootstrap. He has interned at Live Stream Technologies and UCFER, enhancing his skills in Python, networking, and IoT. Achievements include winning the 2022 Ideathon and excelling in Typewriting English Junior Grade. </p>
<div className='hero-action'>
    <div className='hero-connect'> <AnchorLink className="anl" offset={50} href="#contact">Connect with me</AnchorLink></div>
    <div className="hero-resume">My resume</div>

</div>

        
      
    </div>
  )
}

export default Hero
