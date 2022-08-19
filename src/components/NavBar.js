import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ModalLogin from './ModalLogin';
import ModalSinup from './ModalSinup';
import { getUser, logout } from '../store/slice/userSlice';
import { MdShoppingCart } from "react-icons/md";
import { getSizeCart } from './../store/slice/cartSlice';


function NavBar() {

    let { sizeCart } = useSelector(state => state.cart);

    const [showLogin, setShowLogin] = useState(false);
    const [showSinup, setShowSinup] = useState(false);

    const handleShowLogin = () => setShowLogin(true);
    const handleShowSinup = () => setShowSinup(true);

    let dispatch = useDispatch();
    let { isUser } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser())
        dispatch(getSizeCart())
    }, [dispatch])

    let handelLogout = () => {
        dispatch(logout());
    }


    return (
        <>
            <ModalLogin show={showLogin} setShow={setShowLogin} />
            <ModalSinup show={showSinup} setShow={setShowSinup} />
            <Navbar bg="white" className="shadow-sm" fixed='top' expand="md">
                <Container>
                    <Navbar.Brand className="text-capitalize" as={Link} to="/saltae_burger">saltae birjar</Navbar.Brand>
                    <div className='d-block ms-auto me-2 d-md-none'>
                        {!isUser ?
                            <>
                                <Button variant='outline-primary' onClick={handleShowLogin}>login</Button>
                                <Button className='ms-1' onClick={handleShowSinup}>sinup</Button>
                            </>
                            :
                            <Link to="/saltae_burger/cart" className="me-3 position-relative">
                                <MdShoppingCart className='fs-2 text-dark' />
                                <Badge bg="danger" className="position-absolute top-0 end-50 translate-middle">{sizeCart}</Badge>
                            </Link>
                        }
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="m-auto">
                            <Nav.Link className='text-capitalize' as={NavLink} to="/saltae_burger/">home</Nav.Link>
                            <Nav.Link className='text-capitalize' as={NavLink} to="/saltae_burger/about">about</Nav.Link>
                            <Nav.Link className='text-capitalize' as={NavLink} to="/saltae_burger/menu">menu</Nav.Link>
                            <Nav.Link className='text-capitalize' as={NavLink} to="/saltae_burger/offer">offers</Nav.Link>
                            <Nav.Link className='text-capitalize' as={NavLink} to="/saltae_burger/contact">contact</Nav.Link>
                            {isUser ?
                                <Button variant='danger' className='mt-1 d-block d-md-none' onClick={handelLogout}>logout</Button>
                                :
                                null
                            }
                        </Nav>
                        <div className='d-none d-md-flex align-items-center'>
                            {!isUser ?
                                <>
                                    <Button variant='outline-primary' onClick={handleShowLogin}>login</Button>
                                    <Button className='ms-1' onClick={handleShowSinup}>sinup</Button>
                                </>
                                :
                                <>
                                    <Link to="/saltae_burger/cart" className="me-3 position-relative">
                                        <MdShoppingCart className='fs-2 text-dark' />
                                        <Badge bg="danger" className="position-absolute top-0 end-50 translate-middle">{sizeCart}</Badge>
                                    </Link>
                                    <Button variant='danger' className='ms-1' onClick={handelLogout}>logout</Button>
                                </>


                            }
                        </div>



                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar