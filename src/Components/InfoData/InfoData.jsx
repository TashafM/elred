/* eslint-disable*/
import React, { useEffect, useState } from "react";
import "./InfoData.scss";
import { BsFillPencilFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import tabData from "./tabData";
import { Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import ShowData from "./ShowData/ShowData";
import OtherCards from "./OtherCards/OtherCards";

const InfoData = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setList(false)
    setShow(true);
  };

  const [showInput, setShowInput] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [list, setList] = useState(false);

  const [inputVal, setInputVal] = useState({
    email: "",
    email2: "",
    contact: "",
    contact2: "",
  });
  const [userData, setUserData] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitData = () => {
    setUserData([...userData, inputVal]);
    localStorage.setItem('userData', JSON.stringify([...userData,inputVal]))
    setInputVal({
      title: "",
      email: "",
      email2: "",
      contact: "",
      contact2: "",
    });
  };

  const openList = () => {
    setList(true);
    setShow(true)
  }

  const deleteItem = (val) => {
    const a = userData.filter((item,id)=>{
      return id !== val;
    })
    setShow(false);
    localStorage.setItem('userData', JSON.stringify(a))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("userData");
    if (storedTodos) {
      setUserData(JSON.parse(storedTodos));
    }
  }, [userData]);

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(userData));
  // }, [userData]);

  return (
    <Row className="row-infodata">
    <Col md={4} className="infodata-main">
      <div className="data-card">
        <div className="title-sec">
          <div>
            <span className="contact-icn">
              <MdPermContactCalendar />
            </span>
            <span className="txt">Contact</span>
          </div>
          <div className="edit-pencil">
            <BsFillPencilFill onClick={handleShow} />
          </div>
        </div>
        <div className="sales-mail">
          <div className="first">
            <div className="msg-icn">
              <HiMail />
            </div>
            <div className="mail-txt">abc.email1 / abc.email2</div>
          </div>
          <div className="contact-count" onClick={openList}>
            {userData.length}+
          </div>
        </div>
        <div className="contact-number">
          <div className="phn-icn">
            <BsFillTelephoneFill />
          </div>
          <div className="num-txt">abc.contact1 / abc.contact2</div>
        </div>
      </div>

      

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Contact</h2>
            <div className="title-head">Please provide the company's email and contacts</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {list ? (
            <>
            <ShowData data={userData} del={deleteItem}/>
            </>
          ) : (
            <div className="sidebar">
              <div className="input-fields">
              <div className="field-lable">Enter Title</div>
                <input
                  type="text"
                  name="title"
                  placeholder="Sales"
                  value={inputVal.title}
                  onChange={handleChange}
                />
                <div className="field-lable">Email</div>
                <input
                  type="email"
                  name="email"
                  placeholder="eg. salesteam@br.in"
                  value={inputVal.email}
                  onChange={handleChange}
                />
                {showInput && (
                  <input
                    type="email"
                    name="email2"
                    placeholder="eg. salesteam@br.in"
                    value={inputVal.email2}
                    onChange={handleChange}
                  />
                )}
                <div className="email-add-btn">
                  <button onClick={() => setShowInput(true)}>Add more</button>
                </div>

                <div className="field-lable">Contact</div>
                <input
                  type="number"
                  name="contact"
                  placeholder="eg. 8511591740"
                  value={inputVal.contact}
                  onChange={handleChange}
                />
                {showNumber && (
                  <input
                    type="number"
                    name="contact2"
                    placeholder="eg. 8511591740"
                    value={inputVal.contact2}
                    onChange={handleChange}
                  />
                )}
                <div className="number-add-btn">
                  <button onClick={() => setShowNumber(true)}>Add more</button>
                </div>
              </div>
              <div className="save-btn" onClick={submitData}>
                Save
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
    {/* <Col md={3} className='others-div'>
      <OtherCards/>
    </Col> */}
    <>
      <OtherCards/>
    </>
    </Row>
  );
};

export default InfoData;
