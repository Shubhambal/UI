import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
    return (
        <Container className="footer" >
            <div className="box-container">
                <div className="box">
                    <h3>Quick links</h3>
                    <a className="link" href="/">
                        <i className="fa fa-arrow-right"></i> Home
                    </a>
                    <a className="link" href="/category">
                        <i className="fa fa-arrow-right"></i> Category
                    </a>
                    <a className="link" href="/contactus">
                        <i className="fa fa-arrow-right"></i> Contact Us
                    </a>
                  
                </div>

                <div className="box">
                    <h3>Our Company</h3>
                    <a className="link" href="/about">
                        <i className="fa fa-arrow-right"></i>Company info
                    </a>
                   
                    <a className="link" href="#">
                        <i className="fa fa-arrow-right"></i>Career
                    </a>
                    <a className="link" href="#">
                        <i className="fa fa-arrow-right"></i>Privacy Policy
                    </a>
                   
                </div>

                <div className="box">
                    <h3>Help & Contact Us</h3>
                    <a className="link" href="/contactus">
                        <i className="fa fa-arrow-right"></i>Reach Us
                    </a>
                    <a className="link" href="/return">
                        <i className="fa fa-arrow-right"></i>Return & Cancellation
                    </a>
                    <a className="link" href="/FAQ">
                        <i className="fa fa-arrow-right"></i>FAQ's
                    </a>
                </div>
                <div className="box">
                    <h3>Newslatter</h3>
                    <p>Subscribe for latest updates</p>
                    <form action="">
                        <input type="email" name="" placeholder="Email address" id="" className="email" />
                        <input type="submit" value="subscribe" id="subscribe" className="Button" />
                    </form>
                    <div className="share">
                        <a href="#" className="fa fa-facebook-f"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
            <div className="credit">
                Designed by <span>team infoBell</span> || All Rights Reserved.
            </div>
        </Container>
    )
};

export default Footer;

// Inline styles
