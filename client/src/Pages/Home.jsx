import React from 'react'
import "../Pages/home.scss"
import { Link } from 'react-router-dom'
import Data from '../Data/Data'
import Author from '../Data/Author'
import AuthorProfile from '../Component/AuthorProfile'
import Discoverall from '../Component/Discoverall'
import FeaturedPost from '../Component/FeaturedPost'

function Home() {
    { var abc = Data.filter((a) => a.cat == 'beauty') }
    { var def = Data.filter((a) => a.cat == 'home') }
    { var ghi = Data.filter((a) => a.cat == 'family') }
    { var jkl = Data.filter((a) => a.cat == 'handbags') }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 ban">
                        <h1 className='banner'>I enjoy crafting minimalistic designs with vibrant, daring color schemes.</h1>
                        <p className='text-body-tertiary fs-4'>For me, there's something truly captivating about the simplicity of minimalism, and I love to incorporate that aesthetic into my designs.</p>

                        <div className="arrowbutton d-flex">
                            <span className='fs-1'><i class="bi bi-arrow-return-right"></i></span>
                            <button className='btn btn-dark subscribe' ><Link to="/subscribe" style={{ color: 'white', textDecoration: 'none' }}>SUBSCRIBE</Link></button>
                        </div>

                    </div>
                </div>

                <div className="container my-5">
                    <ul className="nav nav-tabs " id="myTab" role="tablist">
                        <li><h2>Latest stories by category</h2></li>
                        <div className='d-flex ms-auto bhbtn'>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">BEAUTY</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">HOME</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">FAMILY</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">HANDBAGS</button>
                            </li>
                        </div>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                            <div className=" bcont d-flex gap-4 justify-content-around">
                                {abc.map((b) => (
                                    <div className="box my-4">
                                        <Link to={`/post/${b.id}`}><img className='w-100' src={b.image} alt="" /></Link>
                                        <h3 className='tit'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.title}</Link></h3>
                                        <p className='body'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.body}</Link></p>
                                        <div className='d-flex justify-content-between border-top'>
                                            <p className='fw-bold'><Link to={`/post/${b.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                            <p className='text-body-tertiary'>{b.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                            <div className="bcont d-flex gap-4 justify-content-between">
                                {def.map((b) => (
                                    <div className="box my-4">
                                        <Link to={`/post/${b.id}`}><img className='w-100' src={b.image} alt="" /></Link>
                                        <h3 className='tit'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.title}</Link></h3>
                                        <p className='body'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.body}</Link></p>
                                        <div className='d-flex justify-content-between border-top'>
                                            <p className='fw-bold'><Link to={`/post/${b.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                            <p className='text-body-tertiary'>{b.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                            <div className="bcont d-flex gap-4 justify-content-between">
                                {ghi.map((b) => (
                                    <div className="box my-4">
                                        <Link to={`/post/${b.id}`}><img className='w-100' src={b.image} alt="" /></Link>
                                        <h3 className='tit'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.title}</Link></h3>
                                        <p className='body'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.body}</Link></p>
                                        <div className='d-flex justify-content-between border-top'>
                                            <p className='fw-bold'><Link to={`/post/${b.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                            <p className='text-body-tertiary'>{b.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>
                            <div className="bcont d-flex gap-4 justify-content-between">
                                {jkl.map((b) => (
                                    <div className="box my-4">
                                        <Link to={`/post/${b.id}`}><img className='w-100' src={b.image} alt="" /></Link>
                                        <h3 className='tit'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.title}</Link></h3>
                                        <p className='body'><Link to={`/post/${b.id}`} style={{ color: 'black', textDecoration: 'none' }}>{b.body}</Link></p>
                                        <div className='d-flex justify-content-between border-top'>
                                            <p className='fw-bold'><Link to={`/post/${b.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                            <p className='text-body-tertiary'>{b.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <AuthorProfile />
                <Discoverall />

                <div className="sub my-5">
                    <div className="box1  p-4  shadow rounded-4">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8 col-sm-12 col-md-12 text-light">
                                <h3>SUBSCRIBE</h3>
                                <p>Join our community and be the first to know, subscribe now!</p>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-12">
                                <button className='btn btn-dark subscribe py-3 me-0'><Link to="/subscribe" style={{ textDecoration: 'none', color: 'white' }}>SUBSCRIBE NOW</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturedPost />
            </div >
        </>
    )
}

export default Home
