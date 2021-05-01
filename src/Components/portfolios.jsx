import React, { useState, useEffect } from 'react';
import { Col, Row, Nav,  Tab } from "react-bootstrap";
import Masonry from "react-responsive-masonry"
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import portfolioImg_01 from "../assets/images/portfolio/1.jpeg";
import portfolioImg_02 from "../assets/images/portfolio/2.jpeg";
import portfolioImg_03 from "../assets/images/portfolio/3.png";
import portfolioImg_04 from "../assets/images/portfolio/4.png";
import portfolioImg_05 from "../assets/images/portfolio/5.jpg";
import portfolioImg_06 from "../assets/images/portfolio/6.jpg";
import { SRLWrapper } from "simple-react-lightbox";
import { useGlobalEvent } from 'beautiful-react-hooks'; 
import SectionTitle from "./section_title";

export default function Portfolios() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [portfolioColumns, setPortfolioColumns] = useState(3);
    const onWindowResize = useGlobalEvent('resize');

    const controlColumns = ()=>{
        setWindowWidth(window.innerWidth);

        if (windowWidth >= 992) {
            setPortfolioColumns(3);
        } else if (windowWidth <= 991 && windowWidth > 767) {
            setPortfolioColumns(3);
        }
        if (windowWidth <= 767) {
            setPortfolioColumns(1);
        }
    }
    onWindowResize((event) => {
        controlColumns();
    });
    
    useEffect(()=>{
        controlColumns();
    }, [windowWidth]);


    return (
        <>
        <div className="portfolio-area section-ptb-2" id="portfolio">
            <div className="container">
                    <SectionTitle
                        title="PORTFOLIO"
                        subTitle="My Masterpiece Collection"
                    />
                    <Tab.Container defaultActiveKey="all">
                        <Row>
                            <div className="col-xl-8 col-lg-9 col-sm-12 mx-auto">
                                <Nav className="pofo-cat pb-5 text-center justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">ALL</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ux_ui">React.js</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="web_development">Wordpress Custom CSS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="web_research">DBs / Web APIs</Nav.Link>
                                    </Nav.Item>
                                   
                                    <div className="pofo-line"></div>
                                </Nav>
                            </div>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                    <SRLWrapper> 
                                            <Masonry columnsCount={portfolioColumns}>
                                            <SinglePortfolio portfolioImg={portfolioImg_01} title="Water My Plant" git="https://github.com/Water-my-plant1/front-end" prod="https://front-end-mauve-rho.vercel.app/"/>
                                            <SinglePortfolio portfolioImg={portfolioImg_02} title="Crypto Tracker w/ Dark Mode" git="https://github.com/rivyyriv/dark-mode/commit/cf25c432771a27e530241534ee56382bbbe47d8d" prod="https://dark-mode-lyart.vercel.app/"/>
                                            <SinglePortfolio portfolioImg={portfolioImg_03} title="SURFERSNEXUS" git="" prod="https://surfersnexus.com/"/>
                                            
                                        </Masonry>
                                     </SRLWrapper>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ux_ui">
                                        <SRLWrapper> 
                                            <Masonry columnsCount={portfolioColumns}>
                                            <SinglePortfolio portfolioImg={portfolioImg_01} title="Water My Plant" git="https://github.com/Water-my-plant1/front-end" prod="https://front-end-mauve-rho.vercel.app/"/>
                                            <SinglePortfolio portfolioImg={portfolioImg_02} title="Crypto Tracker w/ Dark Mode" git="https://github.com/rivyyriv/dark-mode/commit/cf25c432771a27e530241534ee56382bbbe47d8d" prod="https://dark-mode-lyart.vercel.app/"/>



                                            </Masonry>
                                        </SRLWrapper>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="web_development">
                                        <SRLWrapper>
                                            <Masonry columnsCount={portfolioColumns}>
                                        
                                            <SinglePortfolio portfolioImg={portfolioImg_03} title="SURFERSNEXUS" git="" prod="https://surfersnexus.com/"/>



                                            </Masonry>
                                        </SRLWrapper>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="web_research">
                                        <SRLWrapper>
                                        <Masonry columnsCount={portfolioColumns}>
                                   


                                        </Masonry>
                                        </SRLWrapper>
                                    </Tab.Pane>
                
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
            </div>
        </div>
        </>
    )
}
