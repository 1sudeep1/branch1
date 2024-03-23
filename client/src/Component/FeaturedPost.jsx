import React from 'react'
import "./featurepost.scss"
import Data from '../Data/Data'
import { Link } from 'react-router-dom'
function FeaturedPost() {
    return (
        <div>
            <div className="container">
                <h3>Featured Posts</h3>
                {/* <div className="box lastbox">
  
                </div> */}
                <div className="d-flex justify-content-between fp gap-2 ">
                    {Data.slice(0,5).map((a) => (
                     
                            <div className='lbox'>
                                 <Link to={`/post/${a.id}`}><img className='w-100' src={a.image} alt="" /></Link>
                                <p><Link to={`/post/${a.id}`} style={{color:'black', textDecoration:'none'}}>{a.title}</Link></p>
                            </div>
                    
                    ))}

                </div>

            </div>
        </div>
    )
}

export default FeaturedPost
