import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import './TopNav.css';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function TopNav() {
    const [shadow, setShadow] = useState(false);
    const [menu, setMenu] = useState(false);

    function menuToggle() {
        setMenu(prev => !prev)
    }
    function NavShadow() {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', NavShadow)


    return (

        <nav className={shadow ? 'navBar Navshadow' : 'navBar'}>
            <div className="logo">
                <Link to='header' className='logoLink' spy={true} smooth={true} offset={-100} duration={500}  >
                    <h1 className="logo ">Tee<span className='redArea'>wai</span></h1>
                </Link>
            </div>
            <div className={menu ? " container_nav hideOnMobile" : "container_nav"}>

                <div className="mainNav">
                    <ul className="Navlinks">
                        <li className='parentList'>
                            <Link to='#'>
                                About
                            </Link>
                            <ul className='secAbout'>

                                <li>
                                    <Link to='values' activeClass="active" spy={true} smooth={true} offset={-280} duration={500} >
                                        Values
                                    </Link>
                                </li>
                                <li>
                                    <Link to='clients' spy={true} smooth={true} offset={-80} duration={500} >
                                        Client
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='users' spy={true} smooth={true} offset={-100} duration={500} >
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link to='testimonial' spy={true} smooth={true} offset={-100} duration={500} >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link to='faq' spy={true} smooth={true} offset={-100} duration={500} >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="newUser">
                    <ul className="Seclinks">
                        <li>
                            <NavLink to='#'>
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#'>
                                Start For Free
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div >
            <div className="toggleBtn">
                {menu ? < AiOutlineClose className='toggle show' id='close' onClick={menuToggle} /> : < BiMenuAltRight className='toggle show' onClick={menuToggle} />}
            </div>
            {/* {menu ? <div className="overlay anim"></div> : null} */}
        </nav >


    )
}