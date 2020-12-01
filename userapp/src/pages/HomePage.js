import React, { Component, Fragment } from 'react';
import TopBanner from '../Component/Topbanner/TopBanner';
import Services from '../Component/Services/Services';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import Analysis from '../Component/Analysis/Analysis';
import Summary from '../Component/Summary/Summary';
import Projects from '../Component/Projects/Projects';
import Courses from '../Component/Courses/Courses';
import Video from '../Component/Video/Video';
import Review from '../Component/Review/Review';
import Footer from '../Component/Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <Projects />
                <Courses/>
                <Video />
                <Review />
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;