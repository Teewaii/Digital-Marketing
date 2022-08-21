import React from 'react'
import './Value.css'
import secure from '../../images/Secure.png'
import cookies from '../../images/Cookies.png'
import login from '../../images/Login_NotRequired.png'
import MoneyBack from '../../images/Money_Back.png'
import hero from '../../images/HR_current_Line.png'

export default function Value() {
    return (
        <section className="container value">
            <div className="top-container">
                <h1 className="head">
                    One platform to increase followers on all social media.
                </h1>
                <div className="values">
                    <div className="secure card">
                        <img src={secure} alt="secure icon" />
                        <h1 className='caption'>100% Secure</h1>
                        <p className="body">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.</p>
                    </div>
                    <div className="cookies card">
                        <img src={cookies} alt="cookies-icon" />
                        <h1 className='caption'>No Cookies Required</h1>
                        <p className="body">Age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.</p>
                    </div>
                    <div className="login card">
                        <img src={login} alt="login-icon" />
                        <h1 className='caption'>Login Info Not Required</h1>
                        <p className="body">Draw mrs like. Improving end distrusts may instantly was household applauded incommode.</p>
                    </div>
                    <div className="guarantee card">
                        <img src={MoneyBack} alt="MoneyBack-icon" />
                        <h1 className='caption'>Moneyback Guarrentee</h1>
                        <p className="body">Improving end distrusts may instantly was from they fine john he give of rich he. They age and draw mrs like. </p>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <div className="leftSide">
                    <div className="desc">
                        <h1 className="head">Get thousands of active followers</h1>
                        <p className="body">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    </div>
                    <button className='btn'>Start Free</button>
                </div>
                <div className="rightSide">
                    <img src={hero} alt="header image" />
                </div>
            </div>
        </section>
    )
}
