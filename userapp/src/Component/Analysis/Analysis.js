import React, { Component, Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from 'recharts'
class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {Technology:"Java",Project:"150"},
                {Technology:"Python",Project:"100"},
                {Technology:"C",Project:"200"},
                {Technology:"JavaScript",Project:"210"},
                {Technology:"Go",Project:"120"},
                {Technology:"C#",Project:"170"},
                {Technology:"Php",Project:"180"}
            ]
        }
    }
    render() {
        return (
          <Fragment>
            <Container>
                <h1 className="myServices title text-center">Technology used</h1>
                <Row>
                    <Col  lg={6} md={12} sm={12} style={{width:'100%',height:"350px"}}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={350} data={this.state.data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="Project" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className="text-justify  Technoly-sec-2">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </Col>
                </Row>
            </Container>
          </Fragment>
        );
    }
}

export default Analysis;