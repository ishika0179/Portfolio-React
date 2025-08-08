import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import profile_img from '../../assets/final1.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span> I'm Ishika Jain</span>, student at SGSITS.</h1>
      <p>
        Final-year Information Technology student with a strong foundation in
        software development, problem-solving, and modern web technologies.
      </p>
      
      <div className="hero-action">
        <Link to="contact" smooth={true} duration={500} className="hero-connect">
          Connect with me
        </Link>

        <div className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
