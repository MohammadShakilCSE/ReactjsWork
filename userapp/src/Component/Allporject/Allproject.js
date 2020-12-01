import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Allproject extends Component {
    render() {
        return (
           <Fragment>
                <Container className="mt-5">
                    <Row className="text-center">
                        <Col sm={12} md={12} lg={4} className="ProCard mb-4">
                            <Card >
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link to="/projectdetails" className="pro-button">Learn more</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={4} className="ProCard mb-4">
                            <Card >
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link to="/projectdetails" className="pro-button">Learn more</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={4} className="ProCard mb-4">
                            <Card >
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary"><Link to="/projectdetails" className="pro-button">Learn more</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
           </Fragment>
        );
    }
}

export default Allproject;