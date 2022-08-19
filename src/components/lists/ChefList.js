import React from 'react'
import { Row, Col } from 'react-bootstrap';
import CardChef from './../cards/CardChef';

function ChefList({chefData}) {
    return (
        <Row className='g-3'>
            {chefData.map(el => {
                return (
                    <Col sm={6} md={4} key={el.id}>
                        <CardChef data={el} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ChefList