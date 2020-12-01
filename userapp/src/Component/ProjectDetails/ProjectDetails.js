import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
class ProjectDetails extends Component {
    render() {
        return (
           <Fragment>
            <Container>
                <Row className="my-5">
                    <Col lg={6} md={6} sm={12}>
                        <img src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg" className="project-img" alt=""  />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h2>Foll Bazzar</h2>
                        <p>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                        <ul className="project-detail">
                            <li>Unlimited Dynamic Product Category</li> 
                            <li>Admin Can Add, Edit, Delete Product Dynamically</li> 
                            <li>Dynamic shipping point facilities</li> 
                            <li>Admin can send special offer for special user</li> 
                            <li>App force update system form server</li> 
                            <li>App can receive push notification anytime also after the app is closed.</li> 
                            <li>User can see order history and invoice alsov</li> 
                        </ul>
                        <button type="button" className="btn btn-primary">More info</button>
                    </Col>
                </Row>
            </Container>
           </Fragment>
        );
    }
}

export default ProjectDetails;