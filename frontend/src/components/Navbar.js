import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <Link className="navbar-brand mt-4 mt-lg-0" to ={"/Home"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/7e/Logo_of_BGMI.png"
              height={25}
              alt="Bgmi Logo"
              loading="lazy"
            />
          </Link>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link" to = "/Register"> Sign-up </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to = "/Home"> Home </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to = "/Weapons"> Weapons </NavLink> 
            </li>

          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}
          <a className="link-secondary me-3" href="#">
            <i className="fas fa-shopping-cart" />
          </a>
          {/* Notifications */}
          <div className="dropdown">
            <a
              className="link-secondary me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-heart" />
              <span className="badge rounded-pill badge-notification bg-danger">
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Recent
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Older
                </a>
              </li>
            </ul>
          </div>
          {/* Avatar */}
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height={25}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}
  </>
  
  )
}

export default Navbar