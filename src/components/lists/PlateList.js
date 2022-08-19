import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import CardPlate from '../cards/CardPlate';
import { useDispatch, useSelector } from 'react-redux';
import { getPlate } from '../../store/slice/plateSlice';
import CardLoading from './../cards/CardLoading';

function PlateList() {
    let dispatch = useDispatch();
    let { plate, isLoading } = useSelector(state => state.plate)
    useEffect(() => {
        dispatch(getPlate())
    }, [dispatch]);
    if (isLoading) return <CardLoading />
    return (
        <Row className="g-3">
            {plate.map(el => {
                return (
                    <Col sm={6} md={3} key={el.id}>
                        <CardPlate datePlate={el} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PlateList