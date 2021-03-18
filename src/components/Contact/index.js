import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css'

function Contact() {

    return (
        <div className='contact-container'>
            <Form>
                <div className='input'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                </div>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" placeholder="Enter Message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;