import React, { useState, useEffect } from 'react'
import stars from '../../images/Stars.png'
import './Testimonials.css'
import { FaQuoteLeft } from 'react-icons/fa'
import Users from '../Users/Users'
import TestimonialData from '../../Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

export default function Testimonials() {
  const star = Array(4).fill(0);
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const [testimony, setTestimony] = useState();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    axios.get(url, {
      params: {
        _limit: 10
      }
    })

      .then((res) => {
        setTestimony(res.data);
      })

  }, [url])
  return (
    <section className="testimonial">
      <div className="headContainer">
        <h3 className="title">Testimonial</h3>
        <h1 className="head">What Our Happy User Says</h1>
      </div>
      {testimony ?
        <div className="reviewsContainer ">

          <Slider {...settings} className='sliderContainer'>

            {testimony.map((testimony) => (
              <div className="reviewCard" key={testimony.id}>
                <div className="starCon">
                  {star.map((_, i) => (
                    <img className='star' src={stars} alt="" key={i} />
                  ))}
                </div>
                <p className="body msg">{testimony.body}</p>

                <FaQuoteLeft className='quote' />
                <div className="user">
                  < p className="name" > {testimony.name}</p>
                  {/* <img src="https://unsplash.com/Ft4p5E9HjTQ" alt="" className="headShot" /> */}

                  <span className="email">{testimony.email}</span>
                </div>

              </div>
            ))}

          </Slider>
        </div>
        : null}
    </section >
  )
}
