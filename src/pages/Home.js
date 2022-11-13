// import labiry
import React, { useEffect } from 'react'
import { Col, Container, Row, Button, Image, Alert } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';

import 'swiper/css/bundle';

// import data
import { getHomeFoods } from './../store/slice/foodSlice';

// import lists
import ServiceList from '../components/lists/ServiceList';
import FoodList from './../components/lists/FoodList';

// import cards
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import ReviweList from '../components/lists/ReviweList';
import PlateList from './../components/lists/PlateList';


function Home() {

  let { homeFoods, error } = useSelector(state => state.foods)
  let dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Saltae Birjar - home"

    dispatch(getHomeFoods())
  }, [dispatch]);




  return (
    <>
      <NavBar />
      <header className='vh-75 nav-mt py-4 bg-secondary d-flex align-items-center'>
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column justify-content-center align-content-center">
              <div>
                <h1 className='display-4 fw-bold'>Modern restaurant in center of the city</h1>
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dolores?</p>
                <Button to="/menu" as={Link}>order now</Button>
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <Image className='w-100' src="/images/palt.webp" />
            </Col>
          </Row>
        </Container>
      </header>


      <Container className="py-5 my-5">
        <Row className='d-flex justify-content-center text-center mb-4'>
          <Col md={6}>
            <div className="section_title ">
              <span className="sub_title">palte</span>
              <h2 className='display-6 text-capitalize fw-bold'>Food with a special taste</h2>
            </div>
          </Col>
        </Row>
        <PlateList />
      </Container>


      <section className='services bg-secondary py-5'>
        <Container className="py-5">
          <Row className='d-flex justify-content-center text-center mb-4'>
            <Col md={6}>
              <div className="section_title ">
                <span className="sub_title">feature</span>
                <h2 className='display-6 text-capitalize fw-bold'>We offer you the best services</h2>
              </div>
            </Col>
          </Row>
          <ServiceList />
        </Container>
      </section>

      <Container className="py-5">
        <Row className="g-4">
          <Col md={6}>
            <Image className='w-100' src="/images/png-img.png" />
          </Col>
          <Col md={6} className='pt-5'>
            <div className="section_title fs-5 mt-5">
              <span className="sub_title">about</span>
              <h2 className='display-6 text-capitalize fw-bold'>Where The Food’s As Good As The Root Beer.</h2>
            </div>
            <p className="text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus quas praesentium impedit, quos et consequuntur dolores nemo dolor repellat</p>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <FaCheckCircle className='me-2 fs-5 text-primary' />
                Here are thebest deals ever
              </li>
              <li className='mb-2'>
                <FaCheckCircle className='me-2 fs-5 text-primary' />
                Many offers to suit everyone
              </li>
              <li className='mb-2'>
                <FaCheckCircle className='me-2 fs-5 text-primary' />
                Affordable price for everyone
              </li>
              <li className='mb-2'>
                <FaCheckCircle className='me-2 fs-5 text-primary' />
                Valuable gifts for every offer
              </li>
            </ul>
          </Col>
        </Row>
      </Container>



      <Container className="py-5">
        <Row className='d-flex justify-content-center text-center mb-4'>
          <Col md={6}>
            <h2 className="fw-bold text-capitalize">popular dishes with. dilivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi eligendi voluptatibus, expedita quibusdam officia placeat dolorem alias quam</p>

          </Col>
        </Row>
        {error ? <Alert>{error}</Alert> : <FoodList foodData={homeFoods} />}
      </Container>

      <section className="pt-5 my-5 bg-secondary">
        <Container>
          <Row>
            <Col md={6}>
              <Image className="w-100" src='https://jthemes.net/themes/html/testo/files/images/e-shop.png' />
            </Col>
            <Col md={6} className="mt-5 ps-5 pb-5">
              <h2 className='display-5 fw-bold text-capitalize'>download app now</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui in recusandae commodi nostrum necessitatibus cum?</p>
              <ul className='list-unstyled mb-4'>
                <li className='mb-2'>
                  <FaCheckCircle className='me-2 fs-5 text-primary' />
                  Here are thebest deals ever
                </li>
                <li className='mb-2'>
                  <FaCheckCircle className='me-2 fs-5 text-primary' />
                  Many offers to suit everyone
                </li>
                <li className='mb-2'>
                  <FaCheckCircle className='me-2 fs-5 text-primary' />
                  Affordable price for everyone
                </li>
                <li className='mb-2'>
                  <FaCheckCircle className='me-2 fs-5 text-primary' />
                  Valuable gifts for every offer
                </li>
              </ul>
              <Link to="#" className="me-2">
                <Image width={130} height={40} src='/images/google-play.png' />
              </Link>
              <Link to="#">
                <Image width={130} height={40} src='/images/app store.png' />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className='d-flex justify-content-center text-center mb-4'>
          <Col md={6}>
            <div className="section_title ">
              <span className="sub_title">Testimonial</span>
              <h2 className='display-6 text-capitalize fw-bold'>Customer opinions about our services</h2>
            </div>
          </Col>
        </Row>
        <ReviweList />
      </Container>


    </>

  )
}

export default Home