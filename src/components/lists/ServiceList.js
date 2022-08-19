import React from 'react'
import { Row, Col,Card } from "react-bootstrap"
import { MdDeliveryDining,MdFastfood,MdTimer } from "react-icons/md"
import { SiIfood} from "react-icons/si"

function ServiceList() {
    return (
        <Row className='g-3'>
            <Col sm={6} md={3}>
                <Card className="text-center border-0 rounded-5 shadow-sm p-4">
                    <div className="icon mb-3">
                        <MdFastfood className='display-3 text-primary' />
                    </div>
                    <Card.Title className="fs-4 text-capitalize">fresh food</Card.Title>
                </Card>
            </Col>
            <Col sm={6} md={3}>
                <Card className="text-center border-0 rounded-5 shadow-sm p-4">
                    <div className="icon mb-3">
                        <MdDeliveryDining className='display-3 text-primary' />
                    </div>
                    <Card.Title className="fs-4 text-capitalize">express delivery</Card.Title>
                </Card>
            </Col>
            <Col sm={6} md={3}>
                <Card className="text-center border-0 rounded-5 shadow-sm p-4">
                    <div className="icon mb-3">
                        <MdTimer className='display-3 text-primary' />
                    </div>
                    <Card.Title className="fs-4 text-capitalize">24 hour service</Card.Title>
                </Card>
            </Col>
            <Col sm={6} md={3}>
                <Card className="text-center border-0 rounded-5 shadow-sm p-4">
                    <div className="icon mb-3">
                        <SiIfood className='display-3 text-primary' />
                    </div>
                    <Card.Title className="fs-4 text-capitalize">delicious Food</Card.Title>
                </Card>
            </Col>
        </Row>
    )
}

export default ServiceList