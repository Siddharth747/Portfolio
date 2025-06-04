import React from 'react'
import "./testimonial.css"
import Image1 from "../../assets/avatar-1.svg"
import Image2 from "../../assets/avatar-2.svg"
import Image3 from "../../assets/avatar-3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto tempora ut, quisquam veniam atque culpa."
  },
  {
    id: 2,
    image: Image2,
    title: "ruff ju",
    subtitle: "Product designer at Dribble",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto tempora ut, quisquam veniam atque culpa."
  },
  {
    id: 3,
    image: Image3,
    title: "Fuck ju",
    subtitle: "Product designer at Dribble",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto tempora ut, quisquam veniam atque culpa."
  },
]

const Testimonial = () => {
  return (
    <section className='testimonials container section'>
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className='testimonials__container grid'
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        
        grabCursor={true}
        pagination={{clickable:true}}
      >
       SwiperSlide {data.map(({id, image, title, subtitle, comment})=>{
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
