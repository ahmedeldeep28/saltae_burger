import React from 'react'
import { Row, Col } from 'react-bootstrap';
import CardFood from './../cards/CardFood';

function FoodList({ foodData }) {

    return (
        <Row className='g-3'>
            {foodData.map(el => {
                return (
                    <Col sm={6} md={4} key={el.id}>
                        <CardFood data={el} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default FoodList