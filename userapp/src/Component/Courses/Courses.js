import React, { Component,Fragment } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Writing from '../../asset/images/writing.webp';
import {Link} from 'react-router-dom';
import RestClint from "../../RestAPI/RestClint";
import AppUrl from "../../RestAPI/AppUrl";
class Courses extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
       RestClint.GetRequest(AppUrl.Coursehome).then(result=>{
           this.setState({
               myData:result
           })
       })
    }

    render() {
        const myList =this.state.myData;
        const myView = myList.map(lists=>{
            return <Col lg={6} sm={12} md={12} className="mb-3">
                <Row className="mb-3">
                    <Col lg={6} md={6} sm={12} className="mb-3">
                        <img src={lists.small_img} alt="" className="Course-img" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mb-3">
                        <h1 className="CourseTitle">{lists.short_title}</h1>
                        <p className="CourseBody"> {lists.short_description} </p>
                        <button className="btn btn-primary"><Link to="/coursedetails" className="pro-button">Details</Link></button>
                    </Col>
                </Row>
            </Col>
        })
        return (
            <Fragment>
              <Container>
                <h1 className="myServices title text-center">Our Cources</h1>
                    <Row className="mb-5">
                        {myView}
                    </Row>
              </Container>
            </Fragment>
        );
    }
}

export default Courses;