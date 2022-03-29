import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className="footer">

                <div className="f1">
                    <h3>MyIndia &copy; 2022</h3>
                    <p>The Cultural Heritage and Tradition of My India &reg;</p>
                </div>

                <div className="f2">
                    <h5>Quick Links</h5>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="#myindia">MyIndia</Link>

                </div>

            </div>

        </>
    )
}

export default Footer