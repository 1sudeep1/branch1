import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
function Footer() {
    return (
        <>
            <footer>
                <div className="container border-top py-5">
                    <ul className='d-flex align-items-center justify-content-between mainfooter'>
                        <div className="left">
                            <li><Link to="/" className='fs-1' style={{ textDecoration: 'none', color: 'black' }}>Branch.</Link></li>
                            <li className='text-body-tertiary'>© BRANCH - PUBLISHED WITH GHOST</li>
                        </div>

                        <div className="mid d-flex gap-3 me-5 justify-content-center">
                            <li><Link to="/membership" style={{ textDecoration: 'none', color: 'black' }}>MEMBERSHIP</Link></li>
                            <li><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>SIGNIN</Link></li>
                            <li><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>SIGNUP</Link></li>
                        </div>

                        <div className="end d-flex justify-content-center gap-3">
                            <li><Link to="" style={{ textDecoration: 'none', color: 'black' }}><i class="bi bi-facebook"></i></Link></li>
                            <li><Link to="" style={{ textDecoration: 'none', color: 'black' }}><i class="bi bi-twitter"></i></Link></li>
                        </div>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
