import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Content from '../Content'

import React from 'react';

const ContactUs = () => {
    return (
        <div className="container">
            <Content name="Contact Us"/>
            <div className="row">
            <Form className="my-3 col-12 col-md-6 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
        </div>
    );
}

export default ContactUs;
