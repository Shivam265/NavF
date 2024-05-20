import React from 'react'
import { CgAdidas } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { BsBagCheckFill } from "react-icons/bs";
// import { BiSolidNotification } from "react-icons/bi";
const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <CgAdidas  className='mx-4 fs-2' />Adidas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Men</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link active" href="#">Woman</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link active" href="#">Kids</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link " href="#">New</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Support</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link text-danger" href="#">Outlet</a>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2  fs-7 position-relative" type="search" placeholder="Search"  aria-label="Search"/> 
                            <span className='me-10 mt-1 position-absolute icon-right'><IoIosSearch className='cursor-pointer' /></span>

                        </form>

                        <button className='info-button' id="notification-user">
                        <span className="position-relative"><CgProfile />
                        <span className="position-absolute top-0 start-100 translate-middle  rounded-circle bg-warning">+91 
                        <span className="visually-hidden">unread messages</span></span></span>                  
                                     
                        
                        </button>

                        <span className='p-3 '><LiaHeartbeatSolid className="fs-3"  /> </span> 
                        <span className='p-2'><BsBagCheckFill  className='fs-3'/></span> 

                        
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Header
