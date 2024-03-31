import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
        <>
            <div className="container my-3">
                <h1 className='text-center'>LOGIN</h1>
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className='contact-img img-fluid' src="https://branch.trexthemes.com/content/images/2023/05/Screenshot-2023-05-14-at-16.45.18.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 mt-4">
                        <h2>WELCOME BACK!</h2>
                       
                        <input className='contact-input my-2' type="email" placeholder='Your email address' />
                
                        <button className='btn btn-dark subscribe py-3 ms-0 my-2'>SEND LOGIN LINK</button>
                        <p>Don't have an account yet? <Link to="/signup">signup</Link></p>
                    </div>
                </div>
                <Link to="/" className='my-5' style={{textDecoration:'none', color:'black'}}>BACK TO HOMEPAGE</Link>
            </div>
        
        </>
  )
}

export default Login
