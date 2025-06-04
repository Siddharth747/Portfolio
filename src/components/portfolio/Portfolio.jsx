import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem)=>{
    const UpdatedItems = Menu.filter((currElem)=>{
      return currElem.category === categoryItem;
    })

    setItems(UpdatedItems);
  }


  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      
      <div className="work__filters">
        <span className="work__item" onClick={()=>setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={()=>filterItem("Machine Learning")}>Machine Learning</span>
        <span className="work__item" onClick={()=>filterItem("Python")}>Python</span>
        <span className="work__item" onClick={()=>filterItem("ReactJs")}>ReactJs</span>
        {/* <span className="work__item" onClick={()=>filterItem("Branding")}>Branding</span> */}
      </div>
      <div className="work__container grid">
        {items.map((elem)=>{
          const {id, image, title, link, category} = elem;
          return (
            <a href={link} key={id} className='work__card' target='_blank' rel='noopener noreferrer'>
              <div className="work__thumbnail">
                <img src={image} alt="" className='work__img' />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {/* <a href={link} className='work__button'>
                <i className='icon-link work__button-icon'></i>
              </a> */}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
