import React from 'react'
import { Card, Image } from 'react-bootstrap';
import {  FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom';

function CardChef({ data }) {
  let { chefName, jobTitle, image } = data;

  return (
    <Card className='card_chef border-0 rounded-5'>
      <div className="head">
        <Image className='m-auto' width="170px" src={`${image}`} />
      </div>
      <Card.Body className='text-center single_blog_text'>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>{jobTitle}</Card.Text>
        <div className="socail_icon mt-4">
          <Link to="#" className='p-2 rounded-circle me-2'>
            <FaFacebook />
          </Link>
          <Link to="#" className='p-2 rounded-circle me-2'>
            <FaInstagram />
          </Link>
          <Link to="#" className='p-2 rounded-circle me-2'>
            <FaTwitter />
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardChef