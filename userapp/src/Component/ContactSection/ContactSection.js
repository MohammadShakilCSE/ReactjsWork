import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="FootHeader my-3">Quick Contact</h2>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                     Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="FootHeader my-3">Discuss now</h2>
                            <div>
                                <p>House: 64, Road: 18, Dhaka 1213</p>
                                <p>Mohammad Shakil Talukder</p>
                                <p>0199990239</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;