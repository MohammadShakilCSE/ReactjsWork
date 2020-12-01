import React, { Component, Fragment} from 'react';
import { Container, Row,Col,Modal,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';

class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>{
            this.setState({show:false})
        }
        modalOpen=()=>{
            this.setState({show:true})
        }

    render() {
        return (
           <Fragment>
                <Container>
                    <Row>
                        <Col className="VideoCard">
                            <div>
                                <p className="VideoHead">How i do</p>
                                <p className="Cardp lead">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.     Doloremque quisquam iure doloribus esse? Molestiae, magnam iusto! Asperiores tempore atque itaque, necessitatibus repudiandae autem culpa porro quas, laborum aperiam illo ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non obcaecati molestias.
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPlayCircle} onClick={this.modalOpen} className="PlayIcon"></FontAwesomeIcon>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
               
                <Modal.Body>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.modalClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
           </Fragment>
        );
    }
}

export default Video;