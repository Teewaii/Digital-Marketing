import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import headeImage from '../../images/HeaderImage.png'
import './Header.css'
export default function Header() {
    return (
        <section className="header container">
            <div className="leftSide">
                <h1 className="head">Increase your followers on social media</h1>
                <p className="body">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                <button className='btn'>Get Started <span className='rArrow'><HiArrowSmRight /></span></button>

                <div className="joined">
                    <div className="headshots"></div>
                    <p className="body">12,000+ people already joined the arshakir’s
                        increase followers plan. Get started today!</p>
                </div>
            </div>
            <div className="rightSide">
                <img src={headeImage} alt="header image" />
            </div>
        </section>
    )
}
