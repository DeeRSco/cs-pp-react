import React from "react"

const Footer = () => {
    return (
        <div>
            <div className="footer-links">
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Resources</a></p>
                <p><a href="#">FAQs</a></p>
                <p><a href="#">Contact</a></p>
            </div>
        
            <div className="footer-contact">
                <div><i className="fa-brands fa-instagram"></i></div>
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-linkedin"></i></div>
                <div>info@8thseason.org</div>
            </div>

            <div className="footer-sign-up">
                <div className="mailing-list-form">
                <h4>Join our mailing list</h4>
                </div>
                        
                <form action="#">
                    <div className="mailing-list-email">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="email" id="email" placeholder="Email">
                        </input>
                    </div>

                    <div>
                        <input type="button" value="Submit" action="#" className="submit-button">
                        </input>
                    </div>
                </form>
            </div>

            </div>           
    )
};

export default Footer; 