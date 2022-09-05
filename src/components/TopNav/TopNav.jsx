import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
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
                <Link to='/' className='logoLink' >
                    <h1 className="logo ">Tee<span className='redArea'>wai</span></h1>
                </Link>
            </div>
            <div className={menu ? " container_nav hideOnMobile" : "container_nav"}>

                <div className="mainNav">
                    <ul className="Navlinks">
                        <li className='parentList'>
                            <NavLink to='#'>
                                About
                            </NavLink>
                            <ul className='secAbout'>

                                <li>
                                    <NavLink to='Values'>
                                        Values
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='Clients'>
                                        Client
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='Users'>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='Testimonials'>
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='FAQ'>
                                FAQ
                            </NavLink>
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