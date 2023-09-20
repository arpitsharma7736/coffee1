import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
       {/* <!--header section start --> */}
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="logo"><Link to="/"><img src="images/logo.png"/></Link></div>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                     </li>
                    
                     <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="#"><i className="fa fa-search" aria-hidden="true"></i></Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
      {/* <!--header section end --> */}
    </>
  )
}

export default Header
