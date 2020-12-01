import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import AboutDescription from '../Component/AboutDescription/AboutDescription';
import Footer from '../Component/Footer/Footer';

class About extends Component {
    render() {
        return (
           <Fragment>
                <TopNavigation title="About" />
                <PageTop pagetitle="About me" />
                <AboutDescription />
                <Footer />
           </Fragment>
        );
    }
}

export default About;