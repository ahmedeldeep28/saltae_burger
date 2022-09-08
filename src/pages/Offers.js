import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MdFavorite, MdInsertEmoticon, MdAttachMoney, MdOutlineCardGiftcard } from "react-icons/md"
import OfferList from '../components/lists/OfferList';
import { getOffers } from './../store/slice/offerSlice';
import CardLoading from './../components/cards/CardLoading';
import NavBar from '../components/NavBar';

function Offers() {
    let { offers, isLoading } = useSelector(state => state.offers)
    let dispatch = useDispatch()


    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Saltae Birjar - offers"

        dispatch(getOffers())
    }, [dispatch])


    return (
        <>
            <NavBar />
            <section className='hero-wrap d-flex align-items-center' style={{ backgroundImage: 'url("/saltae_burger/images/background/background-offer.jpg")' }} >
                <div className="overlay"></div>
            </section>

            <Container className="py-5">
                <Row className="g-4">
                    <Col md={6}>
                        <Image className='w-100' src="/saltae_burger/images/fast-food-2.svg" />
                    </Col>
                    <Col md={6} className='pt-5'>
                        <h1 className="display-5 mt-4 fw-bold">We have the best offers for you</h1>
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
                    <Row className='mb-5 d-flex justify-content-center text-center'>
                        <Col md={8}>
                            <div className="section_title">
                                <span className="sub_title">offers</span>
                                <h2 className='title display-4 fw-bold'>Our best offers</h2>
                            </div>
                        </Col>
                    </Row>
                    {isLoading ? <CardLoading /> : <OfferList offerData={offers} />}
                </Container>
            </section>

        </>
    )
}

export default Offers