import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class Trams extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="my-4">Terms of Service</h2>
                    <p>Facebook builds technologies and services that enable people to connect with each other, build communities, and grow businesses. These Terms govern your use of Facebook, Messenger, and the other products, features, apps, services, technologies, and software we offer (the Facebook Products or Products), except where we expressly state that separate terms (and not these) apply. These Products are provided to you by Facebook, Inc.

                    We don’t charge you to use Facebook or the other products and services covered by these Terms. Instead, businesses and organizations pay us to show you ads for their products and services. By using our Products, you agree that we can show you ads that we think will be relevant to you and your interests. We use your personal data to help determine which ads to show you.
                    
                    We don’t sell your personal data to advertisers, and we don’t share information that directly identifies you (such as your name, email address or other contact information) with advertisers unless you give us specific permission. Instead, advertisers can tell us things like the kind of audience they want to see their ads, and we show those ads to people who may be interested. We provide advertisers with reports about the performance of their ads that help them understand how people are interacting with their content. See Section 2 below to learn more. </p>

                    <h2 className="my-3">The services we provide </h2>
                    <p>Your experience on Facebook is unlike anyone else's: from the posts, stories, events, ads, and other content you see in News Feed or our video platform to the Pages you follow and other features you might use, such as Trending, Marketplace, and search. We use the data we have - for example, about the connections you make, the choices and settings you select, and what you share and do on and off our Products - to personalize your experience. </p>
                    <p>We help you find and connect with people, groups, businesses, organizations, and others that matter to you across the Facebook Products you use. We use the data we have to make suggestions for you and others - for example, groups to join, events to attend, Pages to follow or send a message to, shows to watch, and people you may want to become friends with. Stronger ties make for better communities, and we believe our services are most useful when people are connected to people, groups, and organizations they care about. </p>

                </Container>
            </Fragment>
        );
    }
}

export default Trams;