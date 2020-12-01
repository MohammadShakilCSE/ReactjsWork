import React, { Component, Fragment } from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import ContactSection from '../Component/ContactSection/ContactSection'
import Footer from '../Component/Footer/Footer';
class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact" />
                <PageTop pagetitle="Contact with us " />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;