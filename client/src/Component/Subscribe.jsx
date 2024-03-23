import React from 'react'
import { Link } from 'react-router-dom'

function Subscribe() {
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center'>SUBSCRIBE</h1>
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className='contact-img img-fluid' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 mt-3">
                        <h2>SUBSCRIBE</h2>
                        <input className='contact-input' type="text" placeholder='Your Name' />
                        <input className='contact-input my-4' type="email" placeholder='Your email address' />
                        <button className='btn btn-dark subscribe py-3 ms-0 my-3'>SUBSCRIBE</button>
                    </div>
                </div>
                <p className='text-center'><Link to="/" className='my-5' style={{ textDecoration: 'none', color: 'black' }}>BACK TO HOMEPAGE</Link></p>
            </div>
        </>
    )
}

export default Subscribe
