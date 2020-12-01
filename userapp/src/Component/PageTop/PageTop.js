import React, { Component, Fragment } from 'react';
import {Container,Row ,Col} from 'react-bootstrap';


class PageTop extends Component {
    render() {
        return (
           <Fragment>  
                <Container className="topFixedBannerPage p-0" fluid={true}>
                    <div className="topOverlayPage">
                        <Container className="text-white topContent">
                            <Row>
                                <Col>
                                    <h3 className="lead PageToph">{this.props.pagetitle}</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
           </Fragment>
        );
    }
}

export default PageTop;