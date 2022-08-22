import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import React from 'react';
import './TopNav.css'

export default function TopNav() {
    const [shadow, setShadow] = useState(false)

    function NavShadow(){
        if (window.scrollY>=90){
            setShadow(true)
        }else{
            setShadow(false)
        }
        }
    window.addEventListener('scroll', NavShadow)
    return (

        <nav className={shadow?'navBar Navshadow':'navBar'}>
            <div className="logo">
                <Link to='/' className='logoLink' >
                    <h1 className="logo ">Tee<span className='redArea'>wai</span></h1>
                </Link>
            </div>
            <div className=" container_nav hideOnMobile">

                <div className="mainNav">
                    <ul className="Navlinks">
                        <li>
                            <NavLink to='#'>
                                About
                            </NavLink>
                            <ul className='secAbout hide'>

                                <li>
                                    <NavLink to='#Values'>
                                        Values
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='#Clients'>
                                        Client
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='#Users'>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#Testimonials'>
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#FAQ'>
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="newUser">
                    <ul className="Seclinks">
                        <li>
                            <NavLink to='#Sign In'>
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#Start Free'>
                                Start Free
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div >
            <div className="toggleBtn">
                <BiMenuAltRight className='toggle show' />
            </div>
        </nav >


    )
}