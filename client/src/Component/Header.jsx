import React, { useState } from 'react'
import "./header.scss"
import Author from '../Data/Author'
import { Link } from 'react-router-dom';
function Header() {
    const [showInput, setShowInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);

        const filteredData = Author.filter((a) => {
            const name = a.autname.toLowerCase();
            const query=searchQuery.toLowerCase();
            return name.includes(query);
        })

        setSearchResults(filteredData);
    }

    const clearResults=()=>{
        setSearchQuery('');
        setSearchResults([]);
    }
    return (
        <>
            <header>
                <div className="container">
                    <ul className=' head d-flex align-items-center justify-content-between'>
                        <div className="logo">
                            <li><Link to="" className="fs-1" style={{ textDecoration: 'none', color: 'black' }}>Branch.</Link></li>
                        </div>
                        <div className="icon d-flex align-items-center gap-2">
                            <div>
                                <li onClick={toggleInput}><Link to="" className="search fs-4 text-dark"><i class="bi bi-search"></i></Link></li>

                            </div>
                            <li>
                                <button className="btn  fs-2 text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" ><i class="bi bi-list"></i></button>
                            </li>
                            <div className="offcanvas offcanvas-end bg-dark" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <ul>
                                    <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></li>
                                    <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>ABOUT</Link></li>
                                    <li><Link to="/author" style={{ textDecoration: 'none', color: 'white' }}>AUTHORS</Link></li>
                                    <li><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>CONTACT</Link></li>
                                    <li><Link to="/membership" style={{ textDecoration: 'none', color: 'white' }}>MEMBERSHIP</Link></li>
                                    <li><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>LOGIN</Link></li>
                                    <li><Link to="/subscribe" style={{ textDecoration: 'none', color: 'white' }}>SUBSCRIBE</Link></li>
                                </ul>
                            </div>
                        </div>
                    </ul>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {showInput && (
                                <input
                                    type="text"
                                    className="search-input form-control py-3"
                                    placeholder="search authors....."
                                    onChange={handleSearch}
                                    value={searchQuery}
                                />
                            )}
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 cold-sm-12">
                                <ul className="list-group list-group-flush">
                                {searchResults.map((b) => (
                                    <li className="list-group-item" key={b.id}>
                                       <Link to={`/author/${b.id}`} style={{color:'black', textDecoration:'none'}}> {b.autname}</Link>
                                        
                                    </li>
                                    ))}

                                    {searchResults.length>5 && (
                                        <button onClick={clearResults}>Clear Results</button>
                                    )}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header
