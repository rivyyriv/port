import React from 'react';
import servicIcon_02 from "../assets/images/icons/code.png";

import servicIcon_05 from "../assets/images/icons/code-white.png";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";
export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="SERVICES"
                    subTitle="What I Am Great At"
                    desc="I am an Experienced Web Developer with a demonstrated history of working in JavaScript frameworks (React, Angular) to build elegant front end interaction through components. I also have experience in building Restful API's and servers through Node.js to provide the full Web App solution."
                />
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Front-End</h4>
                                <p>JavaScript, HTML, CSS</p>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Front-End FrameWorks</h4>
                                <p>React, Angular, Material-UI, BootStrap/ReactStrap, </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                 <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Back-End</h4>
                                <p>Node.js, Express.js </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">RDBMS</h4>
                                <p>Sqlite(dev), Postgresql</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-area mt-45">
                <div className="container">
                    <div className="row">
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Front-End Years of Experience" start={0} end={4} duration={3}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="React.js Years of Experience" start={0} end={2} duration={3}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Node.js Years of Experience" start={0} end={1} duration={1}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="RDBMS Years of Experience" start={0} end={1} duration={1}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
