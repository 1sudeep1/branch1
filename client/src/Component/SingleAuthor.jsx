import React from 'react'
import { useParams } from 'react-router-dom'
import Author from '../Data/Author';
import "./singleauthor.scss"
function SingleAuthor() {
    const { aid } = useParams();
   {var abc= Author.find((a)=>(a.id==aid))}
    return (
        <>
            <div className="container my-5">
                    <div className=" position-relative singleauthorbox text-center">
                        <span className='position-absolute post post1'>{abc.postcount}</span>
                        <img className='sim img-fluid img-thumbnail' src={abc.autimg} alt="" />
                        <h3>{abc.autname}</h3>
                        <p>{abc.details}</p>
                    </div>
                    <ul className='d-flex gap-2 justify-content-center'>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-twitter"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                    </ul>
            </div>
        </>
    )
}

export default SingleAuthor
