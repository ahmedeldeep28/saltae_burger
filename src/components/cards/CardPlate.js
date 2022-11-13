import React from 'react'
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardPlate({datePlate}) {
    return (
        <Card className="card_plate rounded-5  border-0 py-3">
            <div className="avatar-lg rounded-circle mb-3 m-auto bg-light p-2">
                <Image className='w-100' roundedCircle="true" src={`/images/${datePlate.image}`} /> 
            </div>
            <Card.Title className='text-center fs-4 text-uppercase'>{datePlate.plateName}</Card.Title>
            <Link className='stretched-link' to={`/menu/${datePlate.plateName}`}></Link>
        </Card>
    )
}

export default CardPlate