/* eslint-disable*/
import React, { useState } from "react";
import tabs from "./tabs.js";
import "./TabItems.scss";
import tabContent from "./tabContent.js";
import InfoData from "../InfoData/InfoData.jsx";

const TabItems = () => {

    const [tabId, setTabId] = useState(1)

  const count = (itm) => {
    setTabId(itm)
    console.log(itm);
  };

  return (
    <div className="tabitems-main">
      <div className="tab-div">
      {tabs.map((item) => {
        return (
          <>
            <span className={`tab-name ${item.id == tabId ? 'active-tab' : ''}`} onClick={() => count(item.id)}>
              {item.name}
            </span>
          </>
        );
      })}
      </div>
      <hr />

      <div >
        {tabId == 1 ? <InfoData/> : <div className="no-data"><span>No data available</span> </div>}
      </div>
      
    </div>
  );
};

export default TabItems;
