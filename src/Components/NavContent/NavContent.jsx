import React from 'react'
import './NavContent.scss'
import { Row, Col } from 'react-bootstrap'
import Menus from '../Menus/Menus'
import { Route, Routes } from 'react-router-dom'
import Content from '../Content/Content'

const NavContent = () => {
    return (
        <Row className='navcontent'>
            <Col md={2} className='menus'>
                <div className='sub-menu'>
                    <Menus/>
                </div>
            </Col>
            <Col md={10} className='content'>
                <div className='main-content'>
                    <Content/>
                </div>
            </Col>
        </Row>
    )
}


export default NavContent