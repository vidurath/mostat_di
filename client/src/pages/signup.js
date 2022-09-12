import React, { useState } from "react";
import Navigationbar from "../component/inc/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Signup()
{
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    return (
        
        <>
        <Navigationbar />
        <Container className="my-5">
            <h1 className="p-3 text-center display-1 test">Signup </h1>
            <Card>

            <Row className='p-3 g-1 d-flex align-items-center'>

                <Col md='4'>
                    <Card.Img src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                </Col>

                <Col md='8' className="p-5">

                    <Card.Body>
                    <h5>Username</h5>
                    <Form.Control className='mb-4' type='text' onChange={((e) => {
                        setUsernameReg(e.target.value)
                    })} />
                    <h5>Password</h5>
                    <Form.Control className='mb-4' type='password'onChange={((e) => {
                        setPasswordReg(e.target.value)
                    })} />

                    <Button className="mb-4 w-100">Sign in</Button>

                    </Card.Body>

                </Col>

                </Row>

            </Card>
        </Container>
        </>

    );
}

export default Signup;