import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navLinkS">
                    <Link className="navLink" to="#">My India</Link>
                    <Link className="navLink" to="/">Home</Link>
                    <Link className="navLink" to="/aboutus">About Us</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar