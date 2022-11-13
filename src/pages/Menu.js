import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { Container, Alert, Row, Col, InputGroup, Form, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuFoods, removeFoods, searchFoods } from './../store/slice/foodSlice';
import FoodList from './../components/lists/FoodList';
import CardLoading from './../components/cards/CardLoading';
import NavBar from '../components/NavBar';
import { MdOutlineSearch } from "react-icons/md"


function Menu() {

  let { menuFoods, isLoading, error } = useSelector(state => state.foods);
  let dispatch = useDispatch();
  let { foodName } = useParams();


  let [filter, setFilter] = useState({
    search: "",
    category: foodName,
  })



  let handelChange = (e) => {
    setFilter({ ...filter, search: e.target.value, category: foodName })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Saltae Birjar - menu"

    dispatch(getMenuFoods(foodName));
    return () => {
      // cancel the request before component unmounts
      dispatch(removeFoods());
    };
  }, [dispatch, foodName])


  useEffect(() => {
    let deboans = setTimeout(() => {
      dispatch(searchFoods(filter))
    }, 400)

    return () => {
      clearTimeout(deboans)
    }
  }, [dispatch, filter]);





  return (
    <>
      <NavBar />

      <Container className="nav-mt py-5">
        <div className="card p-4 shadow-sm rounded-5 mb-5 ">
          <h5 className='text-capitalize mb-3'>filter food</h5>
          <Row className='g-3'>
            <Col md={9}>
              <InputGroup>
                <InputGroup.Text className='bg-primary border-primary text-white border-right-0' id="basic-addon1"><MdOutlineSearch  className='fs-2'/></InputGroup.Text>
                <Form.Control
                  placeholder="search food"
                  size="lg"
                  name="search"
                  onChange={handelChange}
                />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Dropdown>
                <Dropdown.Toggle variant="dark" className="w-100" size="lg" id="dropdown-basic">
                  {foodName ? `filter(${foodName})` : "Filter"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/menu">all</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/menu/burger">burger</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/menu/pizza">pizza</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/menu/drinks">drinks</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/menu/dessert">dessert</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/menu/pasta">pasta</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className="pt-5">
          <div className="section_title mb-4">
            <span className="sub_title">Menu</span>
            <h2 className='title display-5 fw-bold'>Delicious Food Menu</h2>
          </div>
          {isLoading ? <CardLoading className="nav-mt" />
            : error ?
              <Alert>{error}</Alert> :
              menuFoods.length === 0 ?
                <Alert>no result</Alert> :
                <FoodList foodData={menuFoods} />
          }
        </div>
      </Container>
    </>

  )
}

export default Menu