import React, { Component, Fragment } from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container className="SumBanner p-0" fluid={true}>
                    <div className="SumOverlay">
                        <Container className="">
                            <Row >
                                <Col className="text-white text-center" sm={12} lg={8} md={6}  >
                                    <Row className="Count-sec mb-5">
                                        <Col >
                                            <h1 className="CountNumber">
                                            
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="CountTitle">Total Projects</h4>                                           
                                        </Col>
                                        <Col  >
                                            <h1 className="CountNumber">                                             
                                                <CountUp start={0} end={120}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="CountTitl">Total Clints</h4>    
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} lg={4} md={6}>
                                  <div>
                                      <Card className="CardTop">
                                          <Card.Body>
                                              <Card.Title>How I Work</Card.Title>
                                              <Card.Text>
                                                  <div className="mb-2">
                                                      <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                                                      <span className="ml-2">Requirment Gethering</span>
                                                  </div>
                                                  <div className="mb-2">
                                                      <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                                                      <span className="ml-2">System Analysis</span>
                                                  </div>
                                                  <div className="mb-2">
                                                      <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                                                      <span className="ml-2">Codeing Testing</span>
                                                  </div>
                                                  <div className="mb-2">
                                                      <FontAwesomeIcon icon={faCheckCircle} className="icon"  />
                                                      <span className="ml-2">Implementation</span>
                                                  </div>
                                              </Card.Text>
                                          </Card.Body>
                                      </Card>
                                  </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;