import React from 'react'
import "./contact.scss"
import { Link } from 'react-router-dom'
function Contact() {
  return (
        <>
            <div className="container text-center my-3">
                <h1>CONNECT</h1>
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <img className='contact-img' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 my-4">
                        <h2>CONNECT WITH US</h2>
                        <input className='contact-input' type="text" placeholder='Your Name' />
                        <input className='contact-input my-4' type="email" placeholder='Your email address' />
                        <input className='contact-input' type="password" placeholder='Your password' />
                        <button className='btn btn-dark subscribe py-3 me-0 my-5'>Contact Us</button>
                    </div>
                </div>
                <Link to="/" className='my-5' style={{textDecoration:'none', color:'black'}}>BACK TO HOMEPAGE</Link>
            </div>
        </>
  )
}

export default Contact
