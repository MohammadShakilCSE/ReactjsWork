import React, { Component, Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h2 >Who I Am</h2>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error est nemo voluptatem cumque. Quo velit aliquam cum quaerat cumque, sequi deserunt placeat eos neque voluptatem quibusdam tenetur fuga facere error vel quam quia assumenda voluptas quasi temporibus dolor labore vero iure. Quos eveniet, aspernatur voluptatum accusamus architecto culpa eos labore.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h2>My Mission</h2>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error est nemo voluptatem cumque. Quo velit aliquam cum quaerat cumque, sequi deserunt placeat eos neque voluptatem quibusdam tenetur fuga facere error vel quam quia assumenda voluptas quasi temporibus dolor labore vero iure. Quos eveniet, aspernatur voluptatum accusamus architecto culpa eos labore.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h2>My Vision</h2>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error est nemo voluptatem cumque. Quo velit aliquam cum quaerat cumque, sequi deserunt placeat eos neque voluptatem quibusdam tenetur fuga facere error vel quam quia assumenda voluptas quasi temporibus dolor labore vero iure. Quos eveniet, aspernatur voluptatum accusamus architecto culpa eos labore.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;