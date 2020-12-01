import React, { Component,Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import CourseDetails from '../Component/CourseDetails/CourseDetails'
import Footer from '../Component/Footer/Footer';
class CourseDetailsPage extends Component {
    render() {
        return (
           <Fragment>
                <TopNavigation title="Project"/>
                <CourseDetails />
                <Footer />
           </Fragment>
        );
    }
}

export default CourseDetailsPage;