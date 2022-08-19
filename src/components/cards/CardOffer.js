import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MdOutlineCheck } from "react-icons/md"

function CardOffer({ data }) {
  let { offerName, price, items } = data;
  return (
    <Card className="rounded-5 shadow-sm overflow-hidden">
      <div className="card-head p-5 bg-light text-center">
        <h4 className='text-capitalize mb-3'>{offerName}</h4>
        <div className="price d-flex justify-content-center align-items-end">
          <p className="fw-bold fs-2 mb-0">{price}</p>
          <span className="mb-2">/Pound</span>
        </div>
      </div>
      <Card.Body className='p-4'>
        <ul className='list-unstyled py-4 mb-0'>
          {items.map((el) => {
            return (
              <li className='mb-3 d-flex align-items-center' key={Math.random()}>
                <MdOutlineCheck className='me-2 fs-4' />
                {el}
              </li>
            )
          })}
        </ul>
        <Button variant='dark' className='d-block m-auto text-center mt-2'>booking offer</Button>
      </Card.Body>
    </Card>
  )
}

export default CardOffer 