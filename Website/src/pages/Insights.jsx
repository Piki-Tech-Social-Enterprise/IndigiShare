import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Insights = () => {
  return (
    <Container className="my-5" fluid>
      <Row>
        <Col xs={12}>
          <h1 className="p-5 bg-linear-gradient text-white text-center">Insights</h1>
          <h3 className="text-linear-gradient">Coming soon...</h3>
          <p>Please check back later.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Insights;
