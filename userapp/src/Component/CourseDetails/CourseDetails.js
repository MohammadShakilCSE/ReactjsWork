import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';
class CourseDetails extends Component {
    render() {
        return (
           <Fragment>
                <Container className="topFixedBannerPage p-0" fluid={true}>
                    <div className="topOverlayPage">
                        <Container className="text-white topContent">
                            <Row >
                                <Col lg={6} md={6} sm={12} className="courseDetails">
                                    <h2>Full Dynamic webpanel with Admin panel</h2>
                                    <p>Total Studenet 30</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} className="courseDetail">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit facere illum? Architecto aut et, sed odio ex quibusdam. Facere quos impedit, id corrupti inventore eligendi voluptates ullam incidunt perspiciatis.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container>
                    <Row className="my-5">
                        <Col lg={6} md={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus accusantium in earum, minus similique sequi vero. Autem eius, deleniti ab sed temporibus praesentium consequuntur sint corporis sit et suscipit aspernatur amet aliquid cumque reiciendis id consequatur quis iusto ea.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit facere illum? Architecto aut et, sed odio ex quibusdam. Facere quos impedit, id corrupti inventore eligendi voluptates ullam incidunt perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit facere illum? Architecto aut et, sed odio ex quibusdam. Facere quos impedit, id corrupti inventore eligendi voluptates ullam incidunt perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit facere illum? Architecto aut et, sed odio ex quibusdam. Facere quos impedit, id corrupti inventore eligendi voluptates ullam incidunt perspiciatis.</p>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
           </Fragment>
        );
    }
}

export default CourseDetails;