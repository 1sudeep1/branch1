import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center'>REGISTER</h1>
                <div className="row my-5">
                    <div className="col-lg-6">
                        <img className='contact-img' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>CREATE ACCOUNT</h2>
                        <input className='contact-input' type="text" placeholder='Your Name' />
                        <input className='contact-input my-4' type="email" placeholder='Your email address' />
                        <button className='btn btn-dark subscribe py-3 me-0 my-5'>CREATE ACCOUNT</button>
                    </div>
                </div>
                <p className='text-center'><Link to="/" className='my-5' style={{ textDecoration: 'none', color: 'black' }}>BACK TO HOMEPAGE</Link></p>
            </div>
        </>
    )
}

export default Signup
