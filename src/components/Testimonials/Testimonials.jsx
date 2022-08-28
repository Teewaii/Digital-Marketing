import React, { useState, useEffect } from 'react'
import stars from '../../images/Stars.png'
import './Testimonials.css'
//  import TestimonialData from '../../Data'
import { FaQuoteLeft } from 'react-icons/fa'
import Users from '../Users/Users'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

export default function Testimonials() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  const [testimony, setTestimony] = useState();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setTestimony(res.data);
      })
  }, [url])
  return (
    <section className="testimonial">
      <h1 className="title">Testimonial</h1>
      <h1 className="head">What Our Happy User Says</h1>
      <div className="reviewsContainer ">
        <Slider {...settings} className='sliderContainer'>

          {testimony.map((testimony) => (
            <div className="reviewCard" key={testimony.id}>
              <img src={stars} alt="" />
              <p className="body msg">{testimony.body}</p>
              <FaQuoteLeft className='quote' />
              <div className="user">
                < p className="name" > {testimony.name}</p>
                <img src="https://unsplash.com/Ft4p5E9HjTQ" alt="" className="headShot" />

                <span className="post">{testimony.email}</span>
              </div>

            </div>
          ))}
        </Slider>
      </div>

    </section >
  )
}
