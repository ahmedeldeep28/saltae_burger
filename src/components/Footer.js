import React from 'react'
import { Col, Container, Row, Button, InputGroup, Form } from 'react-bootstrap';
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="py-5 mt-5 bg-secondary">
            <Container>
                <Row>
                    <Col sm={6} md={4}>
                        <h3 className="mb-4 text-capitalize">Besnik</h3>
                        <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                        <p className="fw-bold fs-4">01551734799</p>
                    </Col>
                    <Col sm={6} md={2}>
                        <ul className="list-unstyled">
                            <h5 className="mb-4">Navigation</h5>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/" className="text-dark d-block">home</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/about" className="text-dark d-block">about</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu" className="text-dark d-block">menu</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/offer" className="text-dark d-block">offer</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/contact" className="text-dark d-block">contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={2}>
                        <ul className="list-unstyled">
                            <h5 className="mb-4">Services</h5>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu/burger" className="text-dark d-block">burger</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu" className="text-dark d-block">menu</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu/pizza" className="text-dark d-block">pizza</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu/drinks" className="text-dark d-block">drinks</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu/dessert" className="text-dark d-block">dessert</Link>
                            </li>
                            <li className="mb-2 text-capitalize">
                                <Link to="/saltae_burger/menu/pasta" className="text-dark d-block">pasta</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={4}>
                        <h5 className="mb-4">Subscribe newsletter</h5>
                        <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                        <Form action="">
                            <InputGroup className=" mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                                <Button type="button">Subscribe </Button>
                            </InputGroup>
                        </Form>
                        <ul className="socail d-flex align-items-center list-unstyled">
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4" to="/">
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4" to="/">
                                    <i className="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-3">
                                <Link className="text-dark d-block fs-4" to="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="socail__item me-2 ">
                                <Link className="text-dark d-block fs-4" to="/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer