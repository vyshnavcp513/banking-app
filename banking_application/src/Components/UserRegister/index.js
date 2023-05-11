import React, { Fragment, useState } from 'react'
import { Form, Container, Row, Card, Col } from "react-bootstrap";
import Button from '../Button';
import { registerUser } from '../../redux/bank/bankReducer';
import PopMessage from '../PopUp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Register = ({ changeLogin }) => {
    const [user, setUser] = useState({})
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInput = (e) => {
        const data = user;
        const { name, value } = e.target;
        data[name] = value;
    }
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(registerUser(user));
        setShow(true);
        setTimeout(() => {
            setShow(false);
            changeLogin(true);
        }, 2000);
    };

    const labelstyle={
        
        color: "#808080",
        fontSize: "17px",
    };
    return (
        <Fragment>
            <Container>
                <h2 className='text-center'>ABC BANK</h2>

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className='mt-4'>
                            <Card.Body>
                                <Card.Title className='mb-4 text-center' style={{color:"#808080"}}>Create New Account</Card.Title>
                                <Form onSubmit={(e) => onSubmit(e)}>
                                    <div className='mb-3'>

                                        <Form.Group controlId="formUserName">
                                            <Form.Label style={labelstyle}>User Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter User Name"
                                                required
                                                name='name'
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='mb-3'>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label style={labelstyle}>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                name='email'
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className='mb-3'>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label style={labelstyle}>Password</Form.Label>
                                            <Form.Control
                                                className='needs-validate' novalidate
                                                type="password"
                                                placeholder="Enter a Password"
                                                required
                                                name="password"
                                                onChange={(e) => handleInput(e)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className='mb-3'>

                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Agree to our Terms and Policy" />
                                        </Form.Group>
                                    </div>
                                    <Button content="Create an Account" />


                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
            <PopMessage show={show} message="Account Created" />
        </Fragment>
    )
}

export default Register