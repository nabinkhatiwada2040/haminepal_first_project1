import React from 'react'

import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './../../image/logo.png'
import './Nevbar.css'
import {Link} from 'react-router-dom'



const Nevbar = () => {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <img src={logo} className="logo" alt="logo images" />
                    </div>
                    <div className="col-9">
                        <div className="dropdown-icon">
                        <select name="Discover" id="Discover">
                            <option value="cause">Discover</option>
                        </select>
                     
                        <select name="Discover" id="Discover">
                            <option value="cause">Fundraise for</option>
                        </select>
                        <select name="Discover" id="Discover">
                            <option value="cause">How it works</option>
                        </select>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="col-6 menu_icon">
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6 join-info">
                        <ul>
                            <li>
                                Search
                            </li>
                            <li>
                                Sign in
                            </li>
                            <li>
                                <button>
                                    Join now
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="col-12 nav-items">
                <ul>
                    <li>  
                            <Link className="link" to="/"><b>Home</b></Link>    
                    </li>
                    <li>
                        <Link className="link">Donate</Link>
                    </li>
                    <li>
                    <Link className="link">Be Volunteer</Link>
                    </li>
                    <li>
                    <Link className="link">Cause</Link>
                    </li>
                    <li>
                        <Link className="link">Events</Link>
                    </li>
                    <li>
                        <Link className="link">Transparency</Link>
                    </li>
                    <li>
                        <Link className="link">Our Community</Link>
                    </li>
                    <li>
                        <Link className="link" to='about'>About Us</Link>
                    </li>
                    <li>
                        <Link className="link" to="Contact" >Contact Us</Link>
                    </li>
                </ul>
            </div>
           
        </div>
        </div>
        </>
    )
}

export default Nevbar
