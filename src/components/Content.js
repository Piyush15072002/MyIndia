import React from 'react'

import { Link } from 'react-router-dom'
const Content = () => {
    return (
        <>
            <div className="content">

                <h3 id="myindia">My India</h3>

                <div className="item">
                    <Link to="/north">Northern India</Link>
                </div>
                <div className="item">
                    <Link to="/south">Southern India</Link>

                </div>
                <div className="item">
                    <Link to="/central">Central India</Link>

                </div>
                <div className="item">
                    <Link to="/western">Western India</Link>

                </div>
                <div className="item">
                    <Link to="/eastern">Eastern India</Link>

                </div>

            </div>

        </>
    )
}

export default Content