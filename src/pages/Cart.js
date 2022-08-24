import React, { useEffect } from 'react';
import { Container, Table, Button, Card, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, getCartItem, getSizeCart } from './../store/slice/cartSlice';
import CardLoading from './../components/cards/CardLoading';
import NavBar from './../components/NavBar';

function Cart() {
    let dispatch = useDispatch();

    let { cartItem, isLoading } = useSelector(state => state.cart);
    let totalCart = 0;


    useEffect(() => {
        dispatch(getCartItem())
    }, [dispatch])

    let deleteItem = (foodName) => {
        dispatch(deleteCartItem(foodName))
        dispatch(getSizeCart())
    }

    let cartItemLoop = cartItem.map((item, idx) => {
        totalCart += item.amount * item.price
        if (isLoading) return <CardLoading />
        return (
            <tr key={idx}>
                <th>{idx}</th>
                <th>{item.foodName}</th>
                <th>{item.price}</th>
                <th>{item.amount}</th>
                <th>{item.amount * item.price}</th>
                <th>
                    <Button variant='danger' size="sm" onClick={() => deleteItem(item.foodName)}>delete</Button>
                </th>
            </tr>
        )
    })

    return (
        <>
            <NavBar />
            <Container className='min-vh-75'>
                <h2 className='my-3 text-capitalize'>shoping cart</h2>
                <Table className='rounded-4 text-center overflow-hidden shadow-sm' responsive borderless bordered hover>
                    <thead className="bg-dark text-light">
                        <tr>
                            <th className='py-3'>#</th>
                            <th className='py-3'>food name</th>
                            <th className='py-3'>price</th>
                            <th className='py-3'>amount</th>
                            <th className='py-3'>total</th>
                            <th className='py-3'>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItemLoop}
                    </tbody>
                </Table>

                {cartItem.length === 0 ? <Alert >
                    no product now. <Link to="/saltae_burger/menu">Product Order</Link>
                </Alert> : null}

                <Card className="checkout_card mt-3 rounded-5 bg-light shadow-sm p-3 ms-auto">
                    <Card.Title className='text-capitalize'>Order summary</Card.Title>
                    <ul className="p-0 unlist">
                        <li className='d-flex justify-content-between pb-2 border-bottom mt-2'>Subtotal <span>${totalCart}</span></li>
                        {cartItem.length === 0 ?
                            null
                            :
                            <>
                                <li className='d-flex justify-content-between pb-2 border-bottom mt-3'>order total <span>{totalCart + 5}/pound</span></li>
                                <li className='d-flex justify-content-between pb-2 border-bottom mt-3'>Shipping <span>5/pound</span></li>
                            </>
                        }
                        <li className='d-flex  mt-3 text-success'>Paiement when recieving</li>
                    </ul>
                    {cartItem.length === 0 ?
                        <Button className="text-capitalize mt-3" as={Link} to="/saltae_burger/menu">product order</Button>
                        :
                        <Button className="text-capitalize mt-3" as={Link} to="/saltae_burger/checkout">checkout order</Button>
                    }
                </Card>
            </Container>
        </>

    )
}

export default Cart