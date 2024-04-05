import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";
import { GiPostStamp } from "react-icons/gi";
import './sidebar.scss'
function Sidebar({ children }) {
    return (

        <div className="container">
            <div className='row'>
                <ul className='list-group col-lg-2'>
                    <li className='d-flex align-items-center gap-2 list-group-item'>
                        <FaPenToSquare />
                        <Link to="/dashboard/new-post">New Post</Link>
                    </li>
                    <li className='d-flex align-items-center gap-2 list-group-item'>
                        <GiPostStamp />
                        <Link to="/dashboard/all-post">All Posts</Link>
                    </li>
                </ul>
                <div className='col-lg-10'>{children}</div>
            </div>
        </div>

    )
}

export default Sidebar
