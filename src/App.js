import React from 'react'
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import Resume from "./components/resume/Resume"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/about/About"
// import Pricing from "./components/pricing/Pricing"
// import Testimonial from "./components/testimonial/Testimonial"
import Contact from "./components/contact/Contact"
import Blog from "./components/blog/Blog"
import "./App.css"


const App = () => {
  return (
    <>
     <Sidebar/>
     <main className="main">
        <Home/>
        <About />
        <Resume/>
        <Portfolio/>
        <Services/>
        {/* <Pricing/> */}
        {/* <Testimonial/> */}
        <Blog/>
        <Contact/>
      </main> 
    </>
  )
}

export default App
