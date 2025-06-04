import React from 'react'
import "./services.css"
import Data from "./servicesData"

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {Data.map(({id, image, title, description})=>{
          return(<div className="services__card" key={id}>
            <img src={image} alt='' className="services__img"></img>
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>)
        })}
      </div>

    </section>
  )
}

export default Services
