import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import Trems from '../Component/Trams/Trems';
import Footer from '../Component/Footer/Footer';
class RefundPage extends Component {
    render() {
        return (
          <Fragment>
            <TopNavigation title="Trems"/>
            <PageTop pagetitle="Trems we are provide " />
            <Trems />
            <Footer />
          </Fragment>
        );
    }
}

export default RefundPage;