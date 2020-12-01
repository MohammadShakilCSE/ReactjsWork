import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Web from '../../asset/images/web.d45e6fbf.svg';
import Mobile from '../../asset/images/mobile.b3cc87c3.svg';
import Graphics from'../../asset/images/graphics.c111184b.svg';
import RestClint from "../../RestAPI/RestClint";
import AppUrl from "../../RestAPI/AppUrl";

class Services extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClint.GetRequest(AppUrl.Service).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList= this.state.myData;
        const myView =myList.map(mylists=>{
            return <Col lg={4} md={6} sm={12} >
                <div className="serviceCard">
                    <img src={mylists.service_logo} alt="" />
                    <h1>{mylists.service_name}</h1>
                    <p className="lead">{mylists.service_description}</p>
                </div>
            </Col>
        })
        return (
            <Fragment>
                <Container className="services">
                 <h1 className="myServices title">My Services</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;