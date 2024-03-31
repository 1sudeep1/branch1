import React from 'react'
import Data from '../Data/Data'
import { Link } from 'react-router-dom'

function Discoverall() {

    return (
        <>
            <div className="container my-4">
                <h3 className='dis'>Discover our latest written pieces</h3>
                <div className="row">
                    {Data.map((a) => (
                        <div className="col-lg-4 col-sm-12 col-md-12 discover">
                                    <div className="box my-4">
                                        <Link to={`/post/${a.id}`}><img className='w-100' src={a.image} alt="" /></Link>
                                        <h3 className='tit'><Link to={`/post/${a.id}`} style={{ color: 'black', textDecoration: 'none' }}>{a.title}</Link></h3>
                                        <p className='body'><Link to={`/post/${a.id}`} style={{ color: 'black', textDecoration: 'none' }}>{a.body}</Link></p>
                                        <div className='d-flex justify-content-around border-top'>
                                            <p className='fw-bold'><Link to={`/post/${a.id}`} style={{ color: 'black' }}>READ MORE</Link></p>
                                            <p className='text-body-tertiary'>{a.date}</p>
                                        </div>
                                    </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Discoverall
