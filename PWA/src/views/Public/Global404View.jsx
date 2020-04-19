import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import global404Image from 'assets/img/404.png';

const Global404View = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={3} className="d-none d-sm-block">
          <img
            alt="404"
            src={global404Image}
            style={{
              maxWidth: '180px'
            }}
          />
        </Col>
        <Col xs={12} sm={9}>
          <h1>404 - Auē Taukuri Ē!</h1>
          <h3>Aroha mai e hoa, something went wrong?!</h3>
          <p>Please help us improve our website by informing our web developers of your issue.</p>
          <a href="https://github.com/Piki-Tech-Social-Enterprise/IndigiShare/issues/new" target="_blank" rel="noopener noreferrer">Click here to report your issue</a>
          <p>Kia pai to ra!</p>
          <Button
            className="bg-success text-white mt-3"
            size="md"
            href="/"
          >Back Home</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Global404View;
