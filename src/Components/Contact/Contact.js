import React from 'react'
import './Contact.css'
import Footer from './../Footer/Footer'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './../../image/logo.png'

const Contact = () => {
    return (
        <>
          <div className="container-fluid">
              <div className="row con-background">
                  <div className="col-6">
                      <div className="contact-form">
                         <form action="">
                         <div class="row">
                             <div class="col">
                                  <input type="text" class="form-control first-name" placeholder="First name *"/>
                             </div>
                             <div class="col">
                                  <input type="text" class="form-control last-name" placeholder="Last name *"/>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col">
                             <input className="form-control email" type="email" placeholder="Email Address *" /> <br />
                             </div>
                         </div>
                          <div className="row">
                              <div className="col">
                              <textarea name="" id="" className="form-control" cols="30" rows="2" placeholder="Message *"></textarea><br />
                              </div>
                          </div>
                          <div className="row">
                              <div className="col">
                              <textarea name="" id="" className="form-control" cols="30" rows="2" placeholder="Additional Details *"></textarea><br />
                              </div>
                          </div>
                          <button className="btn btn-danger">Send Message</button>
                         </form>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="row">
                          <div className="col-12">
                             <div className="">
                             <img src={logo} alt="not found" />
                             </div>
                             
                             
                          </div>
                          <div className="col-6">
                              <div className=" con-info">
                                  <h4>Contact Us</h4>
                                  <ul>
                                      <li>Pulchok, Lalitpur</li>
                                      <li>haminepal@gmail.com</li>
                                      <li>Tel: 01-5010510/512</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-6">
                              <div className="follow">
                                  <h4>Follow Us</h4>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div> 
          <Footer/> 
        </>
    )
}

export default Contact
