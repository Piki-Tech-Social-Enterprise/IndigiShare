import React, {
  useEffect,
  useState
} from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import {
  isEmailValid,
  isNullOrEmpty,
  customSwal
} from '../components/Utilities';
import Firebase from '../components/Firebase';

const {
  database
} = Firebase;
const INITIAL_STATE = {
  isLoading: true,
  name: '',
  email: '',
  message: ''
};
const Contact = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const {
    isLoading,
    name,
    email,
    message
  } = state;
  const handleChange = e => {
    e.preventDefault();
    const {
      name,
      value
    } = e.target;
    setState(s => ({
      ...s,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    let swalIcon = 'error';
    let swalTitle = 'Contact Us';
    let swalHtml = '';
    if (isNullOrEmpty(name)) {
      swalHtml = `Name is a required field.`;
    } else if (isNullOrEmpty(email)) {
      swalHtml = `Email is a required field.`;
    } else if (!isEmailValid(email)) {
      swalHtml = `'${email}' is not a valid email address.`;
    } else if (isNullOrEmpty(message)) {
      swalHtml = `Message is a required field.`;
    }
    if (isNullOrEmpty(swalHtml)) {
      try {
        const now = new Date();
        const messagesRef = database.ref('messages');
        await messagesRef.push({
          active: true,
          created: now.toString(),
          createdBy: 'Website',
          email,
          message,
          name,
          updated: now.toString(),
          updatedBy: 'Website'
        });
        swalIcon = 'success';
        swalHtml = 'Thank you contacting us, please keep an eye out for our response.';
        setState(s => ({
          ...s,
          name: INITIAL_STATE.name,
          email: INITIAL_STATE.email,
          message: INITIAL_STATE.message
        }));
      } catch (error) {
        swalHtml = `Error: ${error}`;
      }
    }
    customSwal({
      icon: swalIcon,
      title: swalTitle,
      html: swalHtml,
      confirmButtonText: 'OK'
    });
  };
  useEffect(() => {
    const pageInit = async () => {
      setState(s => ({
        ...s,
        isLoading: false
      }));
    };
    if (isLoading) {
      pageInit();
    }
    return () => { };
  }, [isLoading]);
  return (
    <Container className="my-5" fluid>
      <Row>
        <Col xs={12}>
          <h1 className="p-5 bg-linear-gradient text-white text-center">Contact Us</h1>
          <h3 className="text-linear-gradient">Get in touch...</h3>
          <p>If you have any questions or need help, please fill out the form below.</p>
          <Form noValidate formNoValidate autoComplete="chrome-off" onSubmit={handleSubmit}>
            <Row form>
              <Col xs={6}>
                <Input className="mb-3" type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
              </Col>
            </Row>
            <Row form>
              <Col xs={6}>
                <Input className="mb-3" type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
              </Col>
            </Row>
            <Row form>
              <Col xs={6}>
                <Input className="mb-3" type="textarea" placeholder="Message" name="message" value={message} onChange={handleChange} rows={5} />
              </Col>
            </Row>
            <Row form>
              <Col xs={6}>
                <Button className="mb-3" type="submit" color="success" size="lg" block>Send</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
