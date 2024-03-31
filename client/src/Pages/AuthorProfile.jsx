import React from 'react'
import "./authorprofile.scss"
import Author from '../Data/Author'
import { Link } from 'react-router-dom'
function AuthorProfile() {
    return (
        <div className="container">
            <h2 className='border-bottom bestauth'>Meet our best authors</h2>
            <div className="row">
                {Author.map((a) => (
                    <div className="col-lg-2 col-sm-12 col-md-12 my-2 auth">
                        <div className="row py-2 pe-2 a-border">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}><img className='w-100 rounded-pill' src={a.autimg} alt="" /></Link>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}> <h5 className='pp'>{a.autname}</h5></Link>
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}> <p className='posts'>{a.postcount} POSTS</p></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AuthorProfile
