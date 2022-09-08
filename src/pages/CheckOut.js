import React, { useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Form, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../components/Form';
import { toast } from 'react-toastify';
import { clearCart, getSizeCart } from '../store/slice/cartSlice';
import { getCartItem } from './../store/slice/cartSlice';
import { Link } from 'react-router-dom';


function CheckOut() {

  let dispatch = useDispatch();
  let { cartItem } = useSelector(state => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Saltae Birjar - checkout"
    dispatch(getCartItem())
  }, [dispatch])

  let initialValues = {
    fullName: '',
    phone: '',
    address: '',
    message: '',
  }

  let schema = Yup.object({
    fullName: Yup.string().min(5, 'Must be 15 characters or than').max(15, 'Must be 15 characters or less').required('Required'),
    phone: Yup.string().min(11, 'Mobile number not less than 11').max(14, 'Mobile number not more than 11').required('Required'),
    address: Yup.string().min(6, 'Must be 6 characters or than').max(30, 'Must be 30 characters or less').required('Required'),
    message: Yup.string()
  });

  let handleSubmit = (values, onSubmitProps) => {
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      dispatch(clearCart())
      dispatch(getSizeCart())
      toast.success("Food is being sent", {
        position: toast.POSITION.TOP_RIGHT
      });
    }, 800)
  }


  return (
    <>
      <NavBar />
      <Container className='min-vh-75 py-5'>
        <Row className="box-center">
          <Col md={8}>
            <Card className="shadow-sm p-4 rounded-5">
              <h2 className="mb-3 text-capitalize">checkout order</h2>

              {cartItem.length === 0 ?
                <Alert className="mb-3">
                  You do not have a product in the goods <Link to="/menu">Product Order</Link>
                </Alert>
                :
                <>
                  <Alert className="mb-3" key={"success"} variant={"success"}>
                    Paiement when recieving
                  </Alert>
                  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    {(props) => {
                      return (
                        <Form onSubmit={props.handleSubmit}>
                          <Row className="gx-2">
                            <Col md={6} >
                              <FormInput name="fullName" label="full name" propsForm={props} placeholder="enter full name" />
                            </Col>
                            <Col md={6} >
                              <FormInput name="phone" label="phone" propsForm={props} placeholder="enter phone number" />
                            </Col>
                          </Row>
                          <FormInput name="address" label="address" propsForm={props} placeholder="enter your address" />

                          <FormInput className="message" as="textarea" name="message" label="message" propsForm={props} placeholder="enter message" />
                          <Button type="submit" className="text-capitalize" disabled={props.isSubmitting}>
                            {props.isSubmitting && <Spinner className="me-2" as="span" animation="border" size="sm" />}
                            order now
                          </Button>
                        </Form>
                      )
                    }}
                  </Formik>
                </>
              }

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CheckOut