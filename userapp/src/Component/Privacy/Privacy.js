import React, { Component, Fragment } from 'react';
import { Container} from 'react-bootstrap';
class Privacy extends Component {
    render() {
        return (
           <Fragment>
            <Container>
                <h4 className="my-4">Our Commitment to User Privacy: </h4>
                <p  className="my-4">This Policy describes how Privacy.com protects and manages your personal data, including:</p>
                <ul>
                    <li>What data we collect when you sign-up for, use, or engage with any of our applications, products, services or websites (collectively "Services");</li>
                    <li>How we manage data from the beginning of your engagement forward;</li>
                    <li>The choices you have regarding how data is managed.</li>
                </ul>
                <h2 className="my-4">Cookies and Tracking Technologies:</h2>
                <p>We and our partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and gather information about our user base, such as location information based on IP addresses. You can control the use of cookies at the individual browser level. For more information regarding cookies or similar technologies, please review our Cookie Policy.</p>
            </Container>
           </Fragment>
        );
    }
}

export default Privacy;