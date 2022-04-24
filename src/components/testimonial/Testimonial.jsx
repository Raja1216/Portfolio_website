import React from 'react'
import "./testimonial.css"
import AVTR1 from "../../assets/avatar1.png"
import AVTR2 from "../../assets/avatar2.png"
import AVTR3 from "../../assets/avatar3.png"
import AVTR4 from "../../assets/avatar4.png"

// import Swiper core and required modules
import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'Raja Roy',
    review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    avatar:AVTR2,
    name:'Raja Roy',
    review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    avatar:AVTR3,
    name:'Raja Roy',
    review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    avatar:AVTR4,
    name:'Raja Roy',
    review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonial__container'
       // install Swiper modules
       modules={[Pagination,A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt='Avatar'/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
           {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial