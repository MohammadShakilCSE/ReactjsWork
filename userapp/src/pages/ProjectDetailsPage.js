import React, { Component,Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import ProjectDetails from '../Component/ProjectDetails/ProjectDetails';
import Footer from '../Component/Footer/Footer';
class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project"/>
                <PageTop pagetitle="Project Details" />
                <ProjectDetails />
                <Footer />
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;