import React, { useEffect, useState } from "react";
import { BsFillPencilFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import "./ShowData.scss";

const ShowData = (props) => {
  const [dataS, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, []);

  return (
    <>
      {dataS.map((item,id) => {
        return (
          <div className="showdata">
            <div className="show-title-sec">
              <div>
                <span className="contact-icn">
                  <MdPermContactCalendar />
                </span>
                <span className="txt">
                {item.title}
                </span>
              </div>
              <div>
                <BsFillPencilFill onClick={()=>props.del(id)}/>
              </div>
            </div>
            <div className="sales-mail">
              <div className="first">
                <span className="msg-icn">
                  <HiMail />
                </span>
                <span className="mail-txt">
                  {item.email2 != '' ? `${item.email} / ${item.email2}` : item.email}
                </span>
              </div>
            </div>
            <div className="contact-number">
              <span className="phn-icn">
                <BsFillTelephoneFill />
              </span>
              <span className="num-txt">
              {item.contact2 != '' ? `${item.contact} / ${item.contact2}` : item.contact}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShowData;

{
  /* <div className="showdata">
      <div className="show-title-sec">
        <div>
          <span className="contact-icn">
            <MdPermContactCalendar />
          </span>
          <span className="txt">Sales Team</span>
        </div>
        <div>
          <BsFillPencilFill />
        </div>
      </div>
      <div className="sales-mail">
        <div className="first">
          <span className="msg-icn">
            <HiMail />
          </span>
          <span className="mail-txt">abc.email1 / abc.email2</span>
        </div>
      </div>
      <div className="contact-number">
        <span className="phn-icn">
          <BsFillTelephoneFill />
        </span>
        <span className="num-txt">abc.contact1 / abc.contact2</span>
      </div>
    </div> */
}
