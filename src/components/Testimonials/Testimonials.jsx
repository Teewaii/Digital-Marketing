import React from 'react'

export default function Testimonials() {
  return (
    <section className="testimony">
        <h1 className="title">Testimonial</h1>
        <h1 className="header">What Our Happy User Says</h1>
        <div className="reviewsContainer">
            <div className="reviewCard">
                <img src="" alt="" />
                <p className="body"></p>
                <div className="user">
                    <img src="" alt="" className="headShot" />
                    <p className="name"></p>
                    <span className="post"></span>
                </div>
            </div>
        </div>
    </section>
  )
}
