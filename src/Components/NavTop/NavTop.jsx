import React from 'react'
import logo from '../../assets/images/logo.png'
import pro from '../../assets/images/pro.jpg'
import './NavTop.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const NavTop = () => {
    return (
        <Row className='navigation-row'>
            <Col md={2} className='logo-div'>
                <img src={logo} alt="" />
            </Col>
            <Col md={6}>
                <div className="searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder='Search...' />
                </div>
            </Col>
            <Col md={2} className='btn-div'>
                <Button variant='dark'>
                    <FontAwesomeIcon icon={faCartShopping} />{" "}Checkout (200)</Button>
            </Col>
            <Col className='profile-div' md={2}>
                <img src={pro} alt="" />
                <span className='username'>User Admin</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </Col>
        </Row>
    )
}

export default NavTop