import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import RefundPolicy from '../Component/RefundPolicy/RefundPolicy';
import Footer from '../Component/Footer/Footer';
class RefundPage extends Component {
    render() {
        return (
          <Fragment>
            <TopNavigation title="Refund policy"/>
            <PageTop pagetitle="Refund policy" />
            <RefundPolicy />
            <Footer />
          </Fragment>
        );
    }
}

export default RefundPage;