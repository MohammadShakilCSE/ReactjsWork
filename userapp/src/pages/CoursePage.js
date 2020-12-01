import React, { Component ,Fragment} from 'react';
import Allcouces from '../Component/Allcources/Allcources';
import TopNavigation from '../Component/TopNavigation/TopNavigation';
import PageTop from '../Component/PageTop/PageTop';
import Footer from '../Component/Footer/Footer';
class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course" />
                <PageTop pagetitle="All Courses" />
                <Allcouces  />
                <Footer />
            </Fragment>
        );
    }
}

export default CoursePage;