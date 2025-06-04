import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-1.svg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>
    
      <div className="about__container grid" >
        <img src={Image} alt="" className='about__img'/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Hi, I am Siddharth Misra. A computer Science Engineer, with Proficiency in machine learning and working experience with digital marketing and tools like Figma, JIRA. </p>
            <a href="/public/Siddharth_Misra.pdf" className='btn' download target='_blank' rel='noopener noreferrer'>Download CV</a>
          </div>

        <div className='about__skills grid'>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python-ML/AI</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage ml'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage coding'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ReactJs</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage development'></span>
              </div>
            </div>
          
        </div>  
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About
