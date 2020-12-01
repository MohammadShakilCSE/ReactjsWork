import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link } from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={3} md={6} sm={6} className="Footer">
                            <h2 className="FootHeader">Follow Me</h2>
                            <div>
                                <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
                               <a href="#" className="Footlink">facebook</a>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                                <a href="#" className="Footlink">twitter</a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="Footer">
                             <h2 className="FootHeader">Address</h2>
                             <div>
                                <p>House: 64, Road: 18, Dhaka 1213</p>
                                <p>Mohammad Shakil Talukder</p>
                                <p>0199990239</p>
                             </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="Footer">
                            <h2 className="FootHeader">Information</h2>
                            <div>
                                <div>
                                <Link to="/about" className="Footlink">About Me</Link>
                                </div>
                                <div>
                                <Link to="contact" className="Footlink">Contact Me</Link>
                                </div>
                                <div>
                                <Link to="/about" className="Footlink">My Resume</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="Footer">
                            <h2 className="FootHeader">Legal</h2>

                            <div>
                                 <div>
                                    <Link to="/refund" className="Footlink">Return Policy</Link>
                                </div>
                                <div>
                                    <Link to="/trems" className="Footlink">Terms & Condition</Link>
                                </div>
                                <div>
                                    <Link to="/privacy" className="Footlink">Privacy</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="MainFooter">
                    <p>All right reserved &copy Mohammad Shakil</p>
                </div>
            </Fragment>
        );
    }
}

export default Footer;