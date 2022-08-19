import React from 'react'
import { Card } from 'react-bootstrap';
import { FaStar, FaQuoteRight, FaQuoteLeft } from "react-icons/fa"

function CardReview({ person }) {
    return (
        <Card className="shadow-sm rounded-4">
            <Card.Body className="p-4">
                <FaQuoteLeft className='fs-4 mb-3' />
                <Card.Text className="text-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam nemo culpa eos ipsum quia distinctio nam! Eaque, ut, ipsam natus quia aliquid illo provident tempora mollitia voluptatibus soluta recusandae.
                </Card.Text>
                <FaQuoteRight className='fs-4 d-block ms-auto' />

            </Card.Body>
            <Card.Footer className='d-flex align-items-center'>
                <div className='ms-2'>
                    <h5 className='fs-5 mb-0'>{person}</h5>
                    <FaStar className='text-primary me-1' />
                    <FaStar className='text-primary me-1' />
                    <FaStar className='text-primary me-1' />
                    <FaStar className='text-primary me-1' />
                    <FaStar className='text-primary me-1' />
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardReview