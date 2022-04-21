import React from 'react';
import '../../views/Contact.css'
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form className='Form'>
        <FormGroup row>
          <Col sm={10}>
            <Input type="text" name="text" id="exampleText" placeholder="Nombre y apellido" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Correo electrónico" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" placeholder='Motivo de la consulta'/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button className='Button'>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}