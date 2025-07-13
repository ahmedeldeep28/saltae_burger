/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormInput, FormSelect } from "../components/Form";
import { toast } from "react-toastify";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Contact() {
  let initialValues = {
    fullName: "",
    phone: "",
    subject: "",
    message: "",
  };

  let schema = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    phone: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  let handleSubmit = (values, onSubmitProps) => {
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      toast.success(`Been sent ${values.subject}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 800);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Salta Birjar - contact us";
  }, []);

  return (
    <>
      <NavBar />
      <header className="bg-secondary vh-75 d-flex align-items-center py-5">
        <Container>
          <Row>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-content-center"
            >
              <h1 className="display-4 fw-400">Contact us now easily</h1>
              <p className="fs-5">
                Naxly bring the power of data science and artificial
                intelligence to every business.
              </p>
            </Col>
            <Col md={6}>
              <lottie-player
                src="https://assets3.lottiefiles.com/private_files/lf30_tvxeldei.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="py-5 mt-5">
        <Row className="g-4">
          <Col md={6}>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                return (
                  <Form onSubmit={props.handleSubmit}>
                    <h2 className="mb-4">Get in Touch</h2>
                    <Row className="gx-2">
                      <Col md={6}>
                        <FormInput
                          name="fullName"
                          label="full name"
                          propsForm={props}
                          placeholder="enter full name"
                        />
                      </Col>
                      <Col md={6}>
                        <FormInput
                          name="phone"
                          label="phone"
                          propsForm={props}
                          placeholder="enter phone number"
                        />
                      </Col>
                    </Row>
                    <FormSelect
                      label="subject"
                      name="subject"
                      propsForm={props}
                    >
                      <option value="complaint">complaint</option>
                      <option value="suggestion">suggestion</option>
                    </FormSelect>
                    <FormInput
                      className="message"
                      as="textarea"
                      name="message"
                      label="message"
                      propsForm={props}
                      placeholder="enter message"
                    />
                    <Button
                      type="submit"
                      className="text-capitalize"
                      disabled={props.isSubmitting}
                    >
                      {props.isSubmitting && (
                        <Spinner
                          className="me-2"
                          as="span"
                          animation="border"
                          size="sm"
                        />
                      )}
                      send message
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Col>
          <Col md={6}>
            <iframe
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1967.4043431591251!2d31.672230809889765!3d30.715111245514805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1649292754806!5m2!1sar!2seg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
