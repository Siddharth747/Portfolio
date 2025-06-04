import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import { useState, useEffect } from 'react'

const Home = () => {
  const roles = [
    "Frontend Developer", 
    "Content Writer",
    "Machine learning Enthusiast",
    "Passionate problem solver"
  ]
  
  const [index, setIndex] = useState(0);
  const [displayedText, setdisplatedText] = useState(roles[0]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1)%roles.length;
        setdisplatedText(roles[newIndex]);
        return newIndex;
      })
    },3000);

    return ()=> clearInterval(interval);
  }, [])
  
  return (
    <section className="home container" id="home">
      <div className="intro">
         <img src={Me} alt="" className="home__img" />
         <h1 className="home__name">Siddharth Misra</h1>
         <span className='home__education'>
          <span className='animated-text'>{displayedText}</span>
         </span>
         <HeaderSocials/>
         <a href="#contact" className="btn">Hire Me</a>
         <ScrollDown/>
      </div>
    </section>
  )
}

export default Home
