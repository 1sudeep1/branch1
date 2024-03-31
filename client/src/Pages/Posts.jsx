import React from 'react'
import Data from '../Data/Data'
import { Link, useParams } from 'react-router-dom'
import "./posts.scss"
function Posts() {
    const { pid } = useParams();
    { var abc = Data.find((a) => (a.id == pid)) }
    { var cde = Data.filter((b) => (b.cat == abc.cat)) }
    return (
        <>
            <div className="container">
                <div className="row hh">
                    <div className="col-lg-6">
                        <img className='w-100' src={abc.image} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <span>{abc.cat.toUpperCase()}</span>
                        <h2>{abc.title}</h2>
                        <p>{abc.body}</p>
                    </div>
                </div>

                <div className="my-5">
                    <h2>Related Posts</h2>
                    <div className="row">

                        {cde.map((c) => (
                            <div className="col-lg-4">
                                <div className="box">
                                    <Link to={`/post/${c.id}`}><img className='w-100' src={c.image} alt="" /></Link>
                                    <h3 className='tit'><Link to={`/post/${c.id}`} style={{ color: 'black', textDecoration: 'none' }}>{c.title}</Link></h3>
                                    <p className='body'><Link to={`/post/${c.id}`} style={{ color: 'black', textDecoration: 'none' }}>{c.body}</Link></p>
                                    <div className='d-flex justify-content-between border-top'>
                                        <p className='fw-bold'><Link to={`/post/${c.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                        <p className='text-body-tertiary'>{c.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
