import React from 'react'
import "./authors.scss"
import Author from '../Data/Author'
import { Link } from 'react-router-dom'
function Authors() {
    return (
        <>
            <div className="container">
                <h2>Get to know our authors.</h2>
                <p>Meet the talented authors behind our content, and discover their unique perspectives on a variety of topics.</p>
                <div className="d-flex justify-content-between autho gap-2 my-2">
                    {Author.map((a) => (
                        <div className="lbox position-relative">
                            <span className='position-absolute post '>{a.postcount}</span>
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}><img className='w-100 img-fluid' src={a.autimg} alt="" /></Link>
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}><h3>{a.autname}</h3></Link>
                            <Link to={`/author/${a.id}`} style={{color:'black', textDecoration:'none'}}><p className='tit'>{a.details}</p></Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Authors
