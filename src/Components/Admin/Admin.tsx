import React from "react";
import "../Admin/Admin.scss";
import { DashboardContent } from "./DashboardContent/DashboardContent";
import { SidebarAdmin } from "./SidebarAdmin/SidebarAdmin";
import { Party } from './party/Party';

export const Admin = () => {
  return (
    <div className="container__dashboard">
      {/* <div className="decoration__container">
        <div className="circle__decoration1"></div>
        <div className="circle__decoration2"></div>
        <div className="circle__decoration3"></div>
        <div className="circle__decoration4"></div>
        <div className="circle__decoration5"></div>
      </div> */}
      <div className="container__components">
        <SidebarAdmin/>
        <DashboardContent/>
        <Party/>
      </div>
    </div>
  );
};
