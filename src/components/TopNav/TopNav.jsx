
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './TopNav.css'

export default function TopNav() {
    return (
        <nav>
            <div className="container container_nav">
                <div className="logo">
                    <Link to='#Header' className='logoLink' >
                        <h1 className="logo">Tee<span>wai</span></h1>
                    </Link>
                </div>
                <div className="mainNav">
                    <ul className="Navlinks">
                        <li>
                            <NavLink to='#Clients'>
                                Client
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#Values'>
                                Values
                            </NavLink>
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
            </div>
        </nav>

    )
}
