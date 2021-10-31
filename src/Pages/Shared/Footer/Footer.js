import React from 'react';
import './Footer.css'
const Footer = () => {
    // footer section
    return (
        <div className='bg-dark text-white'>
            <div className="row footer">
                <div className="col-5">
                    <p className="ms-4 mt-4 fw-bolder">Follow us</p>
                    <div className='d-flex m-3 fs-3'>
                        <i className="fab fa-facebook-square m-2"></i>
                        <i className="fab fa-twitter-square m-2"></i>
                        <i className="fab fa-linkedin-in m-2"></i>
                    </div>
                </div>
                {/* others link for information */}
                <div className="col-7 mt-4">
                    <div className='row'>
                        <div className='col-6'>
                            <small>Trips by others</small> <br />
                            <small>Destinations</small> <br />
                            <small>Places in Singapore</small> <br />
                            <small>Our popular services</small>
                        </div>
                        <div className='col-6'>
                            <small>Currency</small> <br />
                            <small>Contact Us</small> <br />
                            <small>Terms of use</small> <br />
                            <small>Privacy Policy</small>
                        </div>
                    </div>
                </div>
                <p className='ms-4'>COPYRIGHTS @2021 Travelo ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;