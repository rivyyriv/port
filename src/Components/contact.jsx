import React from 'react';
import {
FaEnvelope, 
FaPhone,
FaSkype,
FaTwitter,
FaDribbble,
FaFacebookF, FaGitAlt } from "react-icons/fa";

import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT US"
                    subTitle="Ways To Contact Me"
                />
            </div>
            <div className="container mt-45">
                <div className="row md-justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaEnvelope/></i>
                            </div>
                            <a className="btn-animation" href="rivyyriv@gmail.com">rivyyriv@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaPhone/></i>
                            </div>
                            <a className="btn-animation" href="tel:801-850-7012">801-850-7012</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                            <i><FaGitAlt/></i>

                            </div>
                            <a className="btn-animation" href="https://github.com/rivyyriv">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
