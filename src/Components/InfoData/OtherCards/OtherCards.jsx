import React from "react";
import { Col } from "react-bootstrap";
import { BsFillPencilFill, BsFillTelephoneFill,BsInstagram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import "./OtherCards.scss";
import cardData from "./cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OtherCards = () => {
  return (
    <>
      {cardData.map((item) => {
        return (
          <>
            <Col md={4} className="others-div">
              <div className="data-card">
                <div className="title-sec">
                  <div>
                    <span className="contact-icn">
                    <FontAwesomeIcon icon={item.icon} className="icn" />
                    </span>
                    <span className="txt">{item.title}</span>
                  </div>
                  <div className="edit-pencil">
                    <BsFillPencilFill />
                  </div>
                </div>
                <span >
                  {item.desc == "" ? 
                  <div className="special-div">
                    {item.icons.map((item)=>{
                        return (
                            <div className="icn-dynamic">
                                <FontAwesomeIcon icon={item.img} className="icn" />
                                <div className="name-txt">{item.text}</div>
                            </div>
                        )
                    })}
                  </div>
                   : <span className="desc">{item.desc}</span>}
                </span>
              </div>
            </Col>
          </>
        );
      })}

      {/* <Col md={4} className='others-div'>
      <div className="data-card">
        <div className="title-sec">
          <div>
            <span className="contact-icn">
              <MdPermContactCalendar />
            </span>
            <span className="txt">Hours of Operations</span>
          </div>
          <div>
            <BsFillPencilFill/>
          </div>
        </div>
        <span>Monday to Friday - 09:00 am To 06:00 am</span>
      </div>
      </Col>

      <Col md={4} className='others-div'>
      <div className="data-card">
        <div className="title-sec">
          <div>
            <span className="contact-icn">
              <MdPermContactCalendar />
            </span>
            <span className="txt">Social Media & Links</span>
          </div>
          <div>
            <BsFillPencilFill/>
          </div>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatem.</span>
      </div>
      </Col>

      <Col md={4} className='others-div'>
      <div className="data-card">
        <div className="title-sec">
          <div>
            <span className="contact-icn">
              <MdPermContactCalendar />
            </span>
            <span className="txt">Address</span>
          </div>
          <div>
            <BsFillPencilFill/>
          </div>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatem.</span>
      </div>
      </Col> */}
    </>
  );
};

export default OtherCards;
