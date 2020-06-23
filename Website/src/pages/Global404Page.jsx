import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Routes from '../components/Routes';
import global404Image from '../assets/img/404.png';

const {
  home
} = Routes;
const Global404Page = () => {
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
          <p>Kia pai to ra!</p>
          <Button
            className="tm-bg-primary text-white mt-3"
            size="lg"
            href={home}
          >Back Home</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Global404Page;
