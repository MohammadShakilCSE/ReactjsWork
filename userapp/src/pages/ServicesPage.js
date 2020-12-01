import React, { Component ,Fragment} from 'react';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import Allservices from '../Component/Allservices/Allservices';
import ContactSection from '../Component/ContactSection/ContactSection';
import Footer from '../Component/Footer/Footer';
class ServicesPage extends Component {
    render() {
        return (
           <Fragment>
                <TopNavigation title="Service" />
                <PageTop pagetitle="Get my services" />
                <Allservices />
                <ContactSection />
                <Footer />
           </Fragment>
        );
    }
}

export default ServicesPage;