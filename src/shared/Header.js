import React from "react"

const Header = () => {
    return (
        <div>  
            <div className="header-logo">
                <a href="#">
                    <img src="./public/images/UHR - logo.png" /></a>
            </div>
            <div className="header-links">
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Resources</a></p>
                <p><a href="#">FAQs</a></p>
                <p><a href="#">Contact</a></p>
            </div>

            <a href="#" className="nav-icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>

        </div>
        
    )
}

export default Header;