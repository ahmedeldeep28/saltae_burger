import React from 'react'
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from 'yup';
import { FormInput } from './Form';
import { login } from './../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


function ModalLogin({ show, setShow }) {
    const handleClose = () => setShow(false);
    let initialValues = {
        username: '',
        password: ''

    }

    let schema = Yup.object({
        username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        password: Yup.string().max(15, 'Must be 20 characters or less').required('Required'),
    });

    let dispatch = useDispatch();

    let handleSubmit = (values, formProps) => {

        dispatch(login(values)).unwrap().then(data => {
            toast.success("create success", {
                position: toast.POSITION.TOP_RIGHT
            });
            handleClose()

        }).catch(error => {
            console.log(error);
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }).finally(() => {
            formProps.setSubmitting(false)
            formProps.resetForm();
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title as="h5" className="text-capitalize fs-5">login to site</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    {(props) => {
                        return (
                            <Form onSubmit={props.handleSubmit}>
                                <FormInput propsForm={props} type="text" label="username" name="username" placeholder="enter username" />
                                <FormInput propsForm={props} type="password" label="password" name="password" placeholder="enter password" />
                                <Button type="submit" className="text-capitalize" disabled={props.isSubmitting}>
                                    {props.isSubmitting && <Spinner as="span" animation="border" size="sm" />}
                                    login
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>

            </Modal.Body>

        </Modal>)
}

export default ModalLogin