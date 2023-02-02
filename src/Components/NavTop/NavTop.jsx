import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import pro from "../../assets/images/pro.jpg";
import Menus from '../Menus/Menus'
import "./NavTop.scss";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
  faBurger,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const NavTop = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openMenu = () => {
    console.log("menu open");
  };
  return (
    <>
      <Row className="navigation-row">
        <Col md={2} className="logo-div">
          <img src={logo} alt="" />
        </Col>
        <Col md={6}>
          <div className="searchBar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search..." />
          </div>
        </Col>
        <Col md={2} className="btn-div">
          <Button variant="dark">
            <FontAwesomeIcon icon={faCartShopping} /> Checkout (200)
          </Button>
        </Col>
        <Col className="profile-div" md={2}>
          <img src={pro} alt="" />
          <span className="username">User Admin</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </Col>
      </Row>

      <Row className="mobile-navigation">
        <Col xs={3}>
          <div className="nav-menu">
            <FontAwesomeIcon icon={faBars} onClick={handleShow} />
          </div>
        </Col>
        <Col xs={6}>
          <div className="logo-div">
            <img src={logo} alt="" />
          </div>
        </Col>
        <Col xs={3}>
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Header as="h3">{`Profile Section`}</Popover.Header>
                <Popover.Body>
                  <strong>Logout</strong>
                </Popover.Body>
              </Popover>
            }
          >
            <div className="pro">
              <img src={pro} alt="" />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </OverlayTrigger>
        </Col>

        <Offcanvas show={show} onHide={handleClose} >
          <Offcanvas.Body>
            <Menus/>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </>
  );
};

export default NavTop;
