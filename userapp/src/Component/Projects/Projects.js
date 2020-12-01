import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import RestClint from "../../RestAPI/RestClint";
import AppUrl from "../../RestAPI/AppUrl";

class Projects extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClint.GetRequest(AppUrl.Project).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
       const myList = this.state.myData;
       const list =myList.map(lists=>{
           return <Col sm={12} md={12} lg={4} className="ProCard mb-4">
               <Card >
                   <Card.Img variant="top" src={lists.img_one} />
                   <Card.Body>
                       <Card.Title>{lists.project_title}</Card.Title>
                       <Card.Text>
                           {lists.short_description}
                       </Card.Text>
                       <Button variant="primary"><Link to="/projectdetails" className="pro-button">Learn more</Link></Button>
                   </Card.Body>
               </Card>
           </Col>
       })

        return (
            <Fragment>
                <Container>
                    <h1 className="myServices title text-center">Recent project</h1>
                    <Row className="text-center">
                        {list}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
      
export default Projects;