import React from 'react'
import "./membership.scss"
function Membership() {
    return (
        <>
            <div className="container  my-5">
                <h1 className='text-center'>Membership</h1>
                <p className='text-center'>Unlock full access to Branch and see the entire library of subscribers-only content & updates</p>
                <div>
                    <ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">MONTH</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">YEAR</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                        <div className="row">
                                <div className="col-lg-4 col-sm-12 col-md-12 shadow py-4">
                                    <span className='border p-2'>FREE</span>
                                    <h1 className='memberhead'>Free</h1>
                                    <p>Free plans allows your business to grow and reach more readers.</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>UIX Design & Development</li>
                                        <li>Search Engine Optimization</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP FOR FREE</button>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12  shadow py-4">
                                    <span className='border p-2'>SILVER</span>
                                    <h1 className='memberhead'>$5 <span className='fs-4 fw-normal'> / month</span></h1>
                                    <p>Silver plan allows your business to grow and reach more readers, manage your audiences</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>Search Engine Optimization</li>
                                        <li>UIX Design & Development</li>
                                        <li>Manage Audiences</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP NOW</button>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12 shadow py-4">
                                    <span className='border p-2'>GOLD</span>
                                    <h1 className='memberhead'>$10 <span className='fs-4 fw-normal'> / month</span></h1>
                                    <p>Gold plan allows your business to grow and reach more readers, manage your audiences and customize your dashboard</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>Search Engine Optimization</li>
                                        <li>UIX Design & Development</li>
                                        <li>Manage Audiences</li>
                                        <li>Custom Dashboard Panel</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                        <div className="row">
                                <div className="col-lg-4 col-sm-12 col-md-12 shadow py-4">
                                    <span className='border p-2'>FREE</span>
                                    <h1 className='memberhead'>Free</h1>
                                    <p>Free plans allows your business to grow and reach more readers.</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>UIX Design & Development</li>
                                        <li>Search Engine Optimization</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP FOR FREE</button>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12  shadow py-4">
                                    <span className='border p-2'>SILVER</span>
                                    <h1 className='memberhead'>$50 <span className='fs-4 fw-normal'> / Year</span></h1>
                                    <p>Silver plan allows your business to grow and reach more readers, manage your audiences</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>Search Engine Optimization</li>
                                        <li>UIX Design & Development</li>
                                        <li>Manage Audiences</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP NOW</button>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-12 shadow py-4">
                                    <span className='border p-2'>GOLD</span>
                                    <h1 className='memberhead'>$100 <span className='fs-4 fw-normal'> / Year</span></h1>
                                    <p>Gold plan allows your business to grow and reach more readers, manage your audiences and customize your dashboard</p>
                                    <ul className='liststyle'>
                                        <li>Request API Integration</li>
                                        <li>Search Engine Optimization</li>
                                        <li>UIX Design & Development</li>
                                        <li>Manage Audiences</li>
                                        <li>Custom Dashboard Panel</li>
                                    </ul>
                                    <button className='btn btn-dark subscribe py-3 me-0'>SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Membership
