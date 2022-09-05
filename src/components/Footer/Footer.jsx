import React from 'react'
import './Footer.css';
import { HiArrowSmRight } from 'react-icons/hi'
export default function Footer() {
    return (
        <section className="footer-wrapper ">
            <div className="footer container">
                <div className="top-section">
                    <h1 className="head">Join millions of
                        creative people with Teewai</h1>
                    <button className='btn waitlist'>Join the waitlist<span><HiArrowSmRight /></span></button>
                </div>
                <div className="middle-section">
                    <div className="leftSide">
                        <h1 className="head">Teewaii</h1>
                        <p className="body">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    </div>
                    <div className="rightSide">
                        <ul className="company">
                            <h4 className="title">Company</h4>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Careers</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Pricing</a></li>
                        </ul>
                        <ul className="product">
                            <h4 className="title">Product</h4>
                            <li><a href='#'>Facebook followers</a></li>
                            <li><a href='#'>Instagram Followers</a></li>
                            <li><a href='#'>Twitter Followers</a></li>
                            <li><a href='#'>TikTok Followers</a></li>
                        </ul>
                        <ul className="resources">
                            <h4 className="title">Resources</h4>
                            <li><a href='#'>Proposal Template</a></li>
                            <li><a href='#'>Invoices</a></li>
                            <li><a href='#'>Tuturoial</a></li>
                            <li><a href='#'>How to increase activity</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-section">
                    <p className="body">Developed by <a href='https://github.com/Teewaii'>Teewai</a></p>
                    <p className="body art">Designed by ARShakir, Inc. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}
