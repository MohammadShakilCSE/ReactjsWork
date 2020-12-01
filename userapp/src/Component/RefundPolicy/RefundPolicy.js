import React, { Component,Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
class RefundPolicy extends Component {
    render() {
        return (
          <Fragment>
            <Container className="mt-5">
                <Row>
                  <Col>
                    <ul>
                        <li>So, how do you know the customer agrees to your Refund Policy, and how do you ensure that it's binding? By including a mention of your Refund Policy within your Terms and Conditions or Terms of Use agreement.</li>
                        <li>Since you need a customer's consent to your Terms of Use before they purchase goods or services from you, including your Refund Policy within this document means you can assume that the customer consented to them.</li>
                        <li>When we say including your Refund Policy within your Terms agreements, we don't necessarily mean including the full text of the Refund Policy. Just including a mention of it and a link to the separate agreement will work and is a good option if your Refund Policy is very long and worth separating.</li>
                        <li>Refund Policies vary from store to store, and area to area depending on local legal requirements. Some policies, for example, are more generous than others. All that matters is that you don't impose terms that restrict a customer's statutory rights under the applicable law. These terms will be unenforceable, which could undermine your entire Refund Policy. </li>

                    </ul>
                  </Col>
                </Row>
            </Container>
          </Fragment>
        );
    }
}

export default RefundPolicy;