import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviwImage from '../../asset/images/Review.jpg'
import RestClint from "../../RestAPI/RestClint";
import AppUrl from "../../RestAPI/AppUrl";
class Review extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        return RestClint.GetRequest(AppUrl.Clintreview).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList =this.state.myData;
        const myView = myList.map(lists=>{
            return <div className="rv">
                    <Row className="text-center">
                        <Col>
                            <img src={lists.clicnt_logo} alt="" className="CircleImg" />
                            <h2>{lists.clicnt_title}</h2>
                            <p className="reviewP">{lists.clint_description} </p>
                        </Col>
                    </Row>
                </div>
        })

        var settings = {
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            vertical:true,
            verticalSwiping:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container>
                  <h1 className="myServices title text-center">Clints Review</h1>
                  <Slider {...settings }>
                      {myView}






                  </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default Review;