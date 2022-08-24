import React, { useState } from 'react'
import stars from '../../images/Stars.png'
import './Testimonials.css'
import TestimonialData from '../../Data'

import Users from '../Users/Users'
export default function Testimonials() {
  const [star, setStar] = useState(0)
  return (
    <section className="testimonial">
      <h1 className="title">Testimonial</h1>
      <h1 className="head">What Our Happy User Says</h1>
      <div className="reviewsContainer container">
        {TestimonialData.map((testimony) => {
          return (
            <div className="reviewCard" key={testimony.id}>
              <img src={stars} alt="" />
              <p className="body msg">{testimony.msg}</p>

              <div className="user">
                < p className="name" > {testimony.name}</p>
                <img src="https://unsplash.com/Ft4p5E9HjTQ" alt="" className="headShot" />

                <span className="post">{testimony.position}</span>
              </div>

            </div>
          )
        })}
      </div>
    </section >
  )
}
