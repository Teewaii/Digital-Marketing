import React from 'react';
import subImg from '../../images/communityimage.png';

import './Subscribe.css'
export default function Subscribe() {
    return (
        <section className="subscribe" id='subscribe'>
            <div className="formContainer ">
                <span className="title">Join our Community</span>
                <h1 className="head">Set your social media growth on autopilot.</h1>
                <form action="" className='subForm'>
                    <input type="email" className='email' required placeholder='YOUR EMAIL ADDRESS' />
                    <input type="button" value="SUBSCRIBE" className='button' />
                </form>
            </div>
            <div className="comimage">
                <img src={subImg} alt="" />
            </div>
        </section>
    )
}
