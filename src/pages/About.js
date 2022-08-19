import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import ChefList from './../components/lists/ChefList';
import { useDispatch, useSelector } from 'react-redux';
import { getChefs } from './../store/slice/chefSlice';
import CardLoading from './../components/cards/CardLoading';
import { MdFavorite, MdInsertEmoticon, MdAttachMoney, MdOutlineCardGiftcard } from "react-icons/md"
import NavBar from './../components/NavBar';
import { FaCheckCircle } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ReviweList from './../components/lists/ReviweList';

function About() {

  let { chefs, isLoading } = useSelector(state => state.chefs)
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(getChefs())
  }, [dispatch])


  return (
    <>
      <NavBar />
      <section className='hero-wrap d-flex align-items-center' style={{ backgroundImage: 'url("/saltae_burger/images/background/background 1.jpg")' }} >
        <div className="overlay"></div>
      </section>

      <Container className="py-5">
        <Row className="gx-5">
          <Col md={6}>
            <Image className='w-100' src="/saltae_burger/images/palt.webp" />
          </Col>
          <Col md={6} className='pt-5'>
            <div className="section_title fs-5 mt-5">
              <span className="sub_title">History</span>
              <h2 className='display-6 text-capitalize fw-bold'>Where The Food’s As Good As The Root Beer.</h2>
            </div>
            <p className="text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus quas praesentium impedit, quos et consequuntur dolores nemo dolor repellat</p>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <MdFavorite className='me-2 fs-4 text-primary' />
                Here are thebest deals ever
              </li>
              <li className='mb-2'>
                <MdInsertEmoticon className='me-2 fs-4 text-primary' />
                Many offers to suit everyone
              </li>
              <li className='mb-2'>
                <MdAttachMoney className='me-2 fs-4 text-primary' />
                Affordable price for everyone
              </li>
              <li className='mb-2'>
                <MdOutlineCardGiftcard className='me-2 fs-4 text-primary' />
                Valuable gifts for every offer
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <section className='py-5'>
        <Container>
          <Row className='mb-4 d-flex justify-content-center text-center'>
            <Col md={8}>
              <div className="section_title">
                <span className="sub_title">Chef</span>
                <h2 className='title display-4 fw-bold'>Our Master Chef</h2>
              </div>
            </Col>
          </Row>
          {isLoading ? <CardLoading /> : <ChefList chefData={chefs} />}
        </Container>
      </section>

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

      <Container className="py-5 ">
        <Row className='d-flex justify-content-center text-center my-4'>
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

export default About