import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Web from '../../asset/images/web.d45e6fbf.svg';
import Mobile from '../../asset/images/mobile.b3cc87c3.svg';
import Graphics from'../../asset/images/graphics.c111184b.svg';
class Allservices extends Component {
    render() {
        return (
            <Fragment>
                <Container className="services my-3" >
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard">
                                <img src={Web} alt="" />
                                <h1>Web Development</h1>
                                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officiis possimus eaque totam necessitatibus laudantium at asperiores repellat magni neque.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard">
                                <img src={Mobile} alt="" />
                                <h1>Mobile Development</h1>
                                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officiis possimus eaque totam necessitatibus laudantium at asperiores repellat magni neque.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <div className="serviceCard">
                                <img src={Graphics} alt="" />
                                <h1>Graphics Design</h1>
                                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officiis possimus eaque totam necessitatibus laudantium at asperiores repellat magni neque.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Allservices;