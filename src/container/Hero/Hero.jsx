import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import './hero.css';
import HeroCta from '../../components/CTA/HeroCta';

const Hero = () => {
  return (
    <header className='container hero-container'>
      <div className='hero-container__left'>
        <h2> I'm <span className='hero-container__left__name'>Kuponiyi Oluwaponire</span></h2>
        <TypeAnimation
          sequence={[
            'Coding creativity into reality',
            1000,
            'Harmonizing front-end finesse with back-end brilliance',
            1000,
            'In IOT, bridging the gap between the virtual and physical world',
            1000,
            'Crafting machine learning algorithms transforming complexity into insights',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5rem', display: 'inline-block', height: '6rem'}}
          repeat={Infinity}
        />
        <p className='hero-container__left__dsc1'>Fullstack Developer | Machine Learning Enthsiast | IOT Specialist</p>
        <p className='hero-container__left__dsc2'>Specialised in physical world to the digital realm for smarter solutions. Open Source Enthusiast 🔥. Always learning.</p>
        <HeroCta />
        <div className='hero-container__left__social-icons'>
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
          <div></div>
        </div>
      </div>
      <div className='hero-container__right'>
        Right
        <div>
          Scroll Down
        </div>
      </div>
    </header>
  )
}

export default Hero