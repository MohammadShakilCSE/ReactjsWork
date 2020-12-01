import React, {Component, Fragment} from 'react';
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursePage from "../pages/CoursePage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from '../pages/RefundPage';
import TremsPage from '../pages/TremsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import {Route,Switch} from "react-router-dom";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicesPage} />
                    <Route exact path="/course" component={CoursePage} />
                    <Route exact path="/project" component={ProjectPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/trems" component={TremsPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path ="/projectdetails" component={ProjectDetailsPage} />
                    <Route exact path ="/coursedetails" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;