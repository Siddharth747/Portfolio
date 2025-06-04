import React from 'react'

const ABoutbox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className='about__title'>10+</h3>
                <span className="about__subtitle">Live Production Projects</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">Multi Domain Internships</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Companies Served</span>
            </div>
        </div>
      
    </div>
  )
}

export default ABoutbox
