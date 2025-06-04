import React from 'react'
import "./pricing.css"
import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"


const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>

      <div className="pricing__container grid">
    
        <div className="pricing__item">
          <img src="{Image1}" alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">A simple option but powerful to manage your business</p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className="bt">Get Started</a>
        </div>

        <div className="pricing__item">
          <img src="{Image2}" alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Unlimited product including app integration</p>
          <p className="pricing_support">Mon-Fri Support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className="bt">Get Started</a>
        </div>

        <div className="pricing__item">
          <img src="{Image3}" alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">A wiser option for entire tech product consultation and building</p>
          <p className="pricing_support">24/7 Support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className="bt">Get Started</a>
        </div>
      </div>
    </section>

  )
}

export default Pricing
