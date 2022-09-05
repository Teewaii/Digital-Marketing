import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import React from 'react';
import './TopNav.css'

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
                <NavLink to='/' className='logoLink' spy={true} smooth={true} offset={50} duration={500} >
                    <h1 className="logo ">Tee<span className='redArea'>wai</span></h1>
                </NavLink>
            </div>
            <div className={menu ? " container_nav hideOnMobile" : "container_nav"}>

                <div className="mainNav">
                    <ul className="Navlinks">
                        <li>
                            <NavLink to='#'>
                                About
                            </NavLink>
                            <ul className='secAbout '>

                                <li>
                                    <NavLink to='Values' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                        Values
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='Clients' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                        Client
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='Users' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='Testimonials' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='FAQ' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="newUser">
                    <ul className="Seclinks">
                        <li>
                            <NavLink to='#Sign In' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#Start Free' activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                Start Free
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div >
            <div className="toggleBtn">
                {menu ? < AiOutlineClose className='toggle show' onClick={menuToggle} /> : < BiMenuAltRight className='toggle show' onClick={menuToggle} />}
            </div>
            {menu ? <div className="overlay anim"></div> : null}
        </nav >


    )
}