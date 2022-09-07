import React, { useState } from 'react';
import './Signup.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
export default function Signup() {
    const [shadow, setShadow] = useState(true);
    const [signupForm, setSignupForm] = useState(true)

    function closeForm() {
        setShadow(false)
        setSignupForm(prev => !prev)
    }
    return (
        <><Link to='/' >
            <div className="formContainer">
                {signupForm && <div className="signup" id='signup'>
                    <FaUserCircle className='user' />
                    <div className="head"><h1>Create your Account</h1>
                        <p className="title">Sing in to your Account</p>
                    </div>

                    <div className="Signupform">
                        <form action="#">
                            <input type="email" name="email" id="email" placeholder='Enter email address' />
                            <input type="password" name="password" id="password" placeholder='Password' />
                            <input type="password" name="password" id="comfirm_password" placeholder='Enter Password' />
                            <input type="button" value="Sign up" />
                        </form>
                        <div className="option2">
                            <p>-Sign up with-</p>
                            <div className="icons">
                                <FaFacebook className='icon' />
                                <SiGmail className='icon' />
                                <FaTwitter className='icon' />
                            </div>
                        </div>
                    </div>

                </div>
                }
                {shadow && <div className="overlay " onClick={closeForm}></div>}
            </div>
        </Link>
        </>
    )
}
