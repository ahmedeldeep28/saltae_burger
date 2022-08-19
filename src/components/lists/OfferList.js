import React from 'react'
import { Row, Col } from 'react-bootstrap';
import CardOffer from './../cards/CardOffer';

function OfferList({offerData}) {
    console.log(offerData);
    return (
        <Row className='g-3'>
            {offerData.map(el => {
                return (
                    <Col sm={6} lg={4} key={el.id}>
                        <CardOffer data={el} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default OfferList