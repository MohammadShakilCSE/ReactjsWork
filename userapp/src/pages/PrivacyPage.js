import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import Privacy from '../Component/Privacy/Privacy';
import Footer from '../Component/Footer/Footer';
class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"/>
                <PageTop pagetitle="Privacy " />
                <Privacy />
                <Footer />
            </Fragment>
        );
    }
}

export default PrivacyPage;