import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner, Form, Image, Modal } from "react-bootstrap"
import { FaCartPlus } from "react-icons/fa"
import { FormInput } from '../Form';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, getSizeCart } from '../../store/slice/cartSlice';
import { toast } from 'react-toastify';
import { getUser } from '../../store/slice/userSlice';


function CardFood({ data, showToast }) {

    let { foodName, desc, price, image, category } = data;

    let dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let initialValues = {
        foodName: foodName,
        price: price,
        amount: 1,
        details: ''
    }

    let schema = Yup.object({
        foodName: Yup.string().required('Required'),
        amount: Yup.number().min(1).max(20, "Must be 20 characters or less").required('Required'),
    });

    let { isUser } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser())

    }, [dispatch])


    let handleSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            dispatch(addItemToCart(values))
            dispatch(getSizeCart())

            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setShow(false);
            toast.success("Successfully added to cart", {
                position: toast.POSITION.TOP_RIGHT
            });
        }, 800)
    }

    return (
        <>
            <Card className='card_food overflow-hidden rounded-5' >
                <div className="head">
                    <Image className='m-auto'  src={`${image}`} />
                </div>
                <Card.Body className='p-4 text-center'>
                    <Card.Title className='text-capitalize fs-4'>{foodName}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>
                <Card.Footer className="pb-3 pt-0 bg-transparent border-0  d-flex flex-wrap justify-content-between align-items-center">
                    <p className="mb-0 fw-bold fs-5">{price}/Pound</p>
                    {isUser
                        ? null
                        : <p className="mb-0 fw-bold fs-5">{category}</p>
                    }
                    {isUser
                        ? <Button className="fs-5" variant='primary' size="sm" onClick={handleShow}><FaCartPlus /></Button>
                        : null
                    }
                </Card.Footer>
            </Card>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-capitalize">Order the product now</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="g-4">
                        <Col md={6}>
                            <Image className='m-auto rounded-5' width="100%" src={`${image}`} />

                        </Col>
                        <Col md={6}>
                            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                                {(props) => {
                                    return (
                                        <Form onSubmit={props.handleSubmit}>
                                            <h3 className="text-capitalize">{foodName}</h3>
                                            <p className='text-success'>{price}/Pound</p>
                                            <p>{desc}</p>

             

                                            <FormInput propsForm={props} type="number" label="amount" name="amount" min="1" max="20" />
                                            <FormInput as="textarea" name="details" label="details" propsForm={props} placeholder="enter message" />
                                            <Button type="submit" className="text-capitalize" disabled={props.isSubmitting}>
                                                {props.isSubmitting && <Spinner className="me-2" as="span" animation="border" size="sm" />}
                                                add to card
                                            </Button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CardFood