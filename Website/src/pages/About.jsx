import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const About = () => {
  return (
    <Container className="my-5" fluid>
      <Row>
        <Col xs={12}>
          <h1 className="p-5 bg-linear-gradient text-white text-center">About</h1>
          <h3 className="text-linear-gradient">Our Vision</h3>
          <p>
            IndigiShare is a Māori social enterprise that was created to build economic resilience amongst whānau. Our members come from across the Te Ika a Māui with diverse backgrounds ranging from tech solutions, service design and getting sh!t done. We met up during Covid last year, at a time when many whānau and Māori businesses were struggling. Māori led the way during the initial response and showed that a tikanga approach is the best way to get through.
          </p>
          <h3 className="text-linear-gradient">Our Team</h3>
          <h5 className="text-linear-gradient">Maria Ngawati</h5>
          <p>
            A Mama of 5, she has always been committed to Māori whānau development. She is a small business owner herself and loves to help others achieve their dreams and goals. She has over 20 years in thetertiary and health sector and is currently contracting from home in Rotorua.
          </p>
          <h5 className="text-linear-gradient">Anahera Waru</h5>
          <p>
            After 20yrs in Tāmaki Makaurau working in the public health sector, Anahera and her whānau returned to Rotorua to raise their tamariki ā-hapū, ā-iwi. She is a trustee, wharekai dishwasher and really excited by the vision and enthusiasm of rangatahi.
          </p>
          <h5 className="text-linear-gradient">Rawiri Bhana</h5>
          <p>I am passionate about creating strong meaningful relationships and believe that through open,honest and clear communication we can all “win”. What are Mokopuna Decisions? They are decisions that take into account a long term view, the intergenerational view as opposed to the decisions making for the now. Even more so when ultimately these decisions have negative consequences for our future generations.
          </p>
          <h5 className="text-linear-gradient">Serena Sarika Lal</h5>
          <p>Fijian Indian Tauiwi from East/South Auckland. I use social innovation/design as one of the main ways to address complex and interconnected problems. I aim to continually learn and participate towards my relationship as Tangata Titriti . This opportunity for designing for Māori whānau as well as Papatūānuku in the centre.
          </p>
          <h5 className="text-linear-gradient">Christina Leef</h5>
          <p>
            He uri au no Te Rarawa, Ngāti Manawa, Ngāpuhi, Kuki Airani. I was born in raised in East, Auckland - Glen Innes. After studying Māori Business I became especially interested in Indigenous entrepreneurship and how local solutions could solve many of the problems humanity faces today. I exist to serve Indigenous whānau, especially rangatahi to design their dream lives. I believe in amplifying the vision and voices of rangatahi to participate in enterprise and, governance.
          </p>
          <h5 className="text-linear-gradient">John Shortland</h5>
          <p>
            A computer programmer with over 20 years of experience coding business apps in NZ, Australia, and China. Has an awesome attitude, checks his ego at the door & just gets on with the job. His passion is to tautoko (support) kaupapa Māori.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;
