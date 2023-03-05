import React from 'react';
import { Space } from "antd";
import AdminHeader from "./AdminHeader/Header";
import AdminFooter from './AdminFooter/Footer';
import AdminSideMenu from "./AdminSideMenu/AdminSideMenu";
import AdminHome from './AdminPages/AdminHome';
import AdminContents from './AdminContents/AdminContents';

import "./admin.css";

const AdminIndex = () => {
  return (
    <>
      <div className='AdminIndex'>
        <AdminHeader />
        <Space className="SideMenuAndPageContent">
          <AdminSideMenu className="SideMenu" />
          <AdminHome />
          <AdminContents />
        </Space>
        <div className="admin_Footer">
        <AdminFooter  />
        </div>
     
      </div>
    </>
  )
}

export default AdminIndex;