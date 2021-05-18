import React from 'react'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './../../image/logo.png'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
            <div className="row">
                <div className="col-3">
                    <img src={logo} alt="logo of haminepal" />
                </div>
                <div className="col-3">
                    <div className="quick-links">
                    <h2>Quick links</h2>
                    <ul>
                        <li>Fundraisers</li>
                        <li>Volunteers</li>
                        <li>About HamiNepal</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                    </div>
                </div>
                <div className="col-3">
                   <div className="contact-with">
                   <h2>Connect with us</h2>
                    <ul>
                        <li><Facebook class="fab fa-facebook-f"/>Facebook</li>
                        <li><Twitter class="fab fa-twitter"/>Twitter</li>
                        <li><LinkedIn class="fab fa-linkedin"/>LinkedIn</li>
                        <li><Instrageam class="fab fa-instagram-square"/>Instrageam</li>
                    </ul>
                   </div>
                </div>
                <div className="col-3">
                   <div className="contact">
                   <h2>Contact info</h2>
                    <ul>
                    <li>haminepal@gmail.com</li>
                    <li>OHHH1-5010510/512</li>
                    <li>Pulchok,Lalitpur</li>
                    </ul>
                   </div>
                </div>
                
            </div>
                
            </div>
            <div className="copyright">
                <div className="row">
                        <div className="col-7">
                            <div>
                            <p>Copyright@Haminepal.org 2021 All rights received</p>
                            </div>
                        </div>
                        <div className="col-5">
                           <div>
                           <p>Develop by Hashtechnologies</p>
                           </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer
