import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import RestClint from "../../RestAPI/RestClint";
import AppUrl from "../../RestAPI/AppUrl";

class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            subtitle:""
        }
    }
    componentDidMount(){
        RestClint.GetRequest(AppUrl.Homeetc).then(result=>{
            this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']})
        }).catch(error =>{
            this.setState({title:"Something Wrong",subtitle:"Something Wrong please wait"})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="topFixedBanner p-0" fluid={true}>
                    <div className="topOverlay">
                        <Container className="text-white topContent">
                            <Row>
                                <Col>
                                    <h1 className="topH">{this.state.title}</h1>
                                    <h3 className="lead topSub">{this.state.subtitle}</h3>
                                    <Button variant="primary" className="mt-2">More info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;