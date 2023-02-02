/* eslint-disable*/
import React from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Content.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import TabItems from "../TabItems/TabItems";

const Content = () => {
  return (
    <>
      <div className="upper-content">
        <Routes>
          <Route
            path="/"
            element={<div className="route-text">Dashboard</div>}
          ></Route>
          <Route
            path="/orders"
            element={<div className="route-text">Orders</div>}
          ></Route>
          <Route
            path="/team-members"
            element={<div className="route-text">Team Members</div>}
          ></Route>
          <Route
            path="/partners"
            element={<div className="route-text">Partners</div>}
          ></Route>
          <Route
            path="/product-listings"
            element={<div className="route-text">Product Listings</div>}
          ></Route>
          <Route
            path="/awards-honours"
            element={<div className="route-text">Awards and Honours</div>}
          ></Route>
          <Route
            path="/about-us"
            element={<div className="route-text">About Us</div>}
          ></Route>
          <Route
            path="/payment-info"
            element={<div className="route-text">Payment Info</div>}
          ></Route>
        </Routes>
      </div>

      <div className="company-info">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="verify-text">
          <span>
            <HiBadgeCheck />
          </span>
          <u>Verify Company</u>
        </div>
      </div>

      <div className="dummy-txt">
        <div className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sed nisi
          libero ipsa autem, eveniet quia iure doloribus fugit quaerat ea
          asperiores. Sunt!
        </div>
        <div className="icon-edit">
          <BsFillPencilFill />
        </div>
      </div>

      <div>
        <TabItems/>
      </div>
    </>
  );
};

export default Content;
