import React, { useState } from 'react'
import { Card, Form, ListGroup } from 'react-bootstrap'
import Header from '../Header'
import { depositAmount } from '../../redux/bank/bankReducer';
import Button from '../Button';
import PopMessage from '../PopUp';
import { useDispatch } from 'react-redux';

const Deposit = () => {
    const [amount, setAmount] = useState(0);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount > 0) {
            dispatch(depositAmount(amount))
            setAmount(0);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }
    };
    return (
        <div>
            <Header />
            <div className='d-flex justify-content-center mt-5'>

                <Card style={{ width: '50vw' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='fw-bolder px-3 py-2 my-2 fs-3 text-uppercase'>Money Deposit</ListGroup.Item>
                        <ListGroup.Item>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <div className='mb-3'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            required
                                            value={amount}
                                            min="1"
                                            placeholder="Enter Deposit Amount"
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button content="Deposit" />
                                </div>
                            </Form>

                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
            <PopMessage show={show} message="Amount Deposited!" />
        </div>
    )
}

export default Deposit