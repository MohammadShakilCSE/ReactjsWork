import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import Allproject from '../Component/Allporject/Allproject';
import Footer from '../Component/Footer/Footer';
class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project" />
                <PageTop pagetitle="All Project" />
                <Allproject />
                <Footer />
            </Fragment>
        );
    }
}

export default ProjectPage;