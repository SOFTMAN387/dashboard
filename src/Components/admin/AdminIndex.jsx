import React from 'react';
import { Space } from "antd";
import AdminHeader from "./AdminHeader/Header";
import AdminFooter from './AdminFooter/Footer';
import AdminSideMenu from "./AdminSideMenu/AdminSideMenu";
import AdminHome from './AdminPages/AdminHome';
import "./admin.css";

const AdminIndex = () => {
  return (
    <>
      <div className='AdminIndex'>
        <AdminHeader />
        <Space className="SideMenuAndPageContent">
          <AdminSideMenu />
        <AdminHome />
        </Space>
        <AdminFooter />
      </div>
    </>
  )
}

export default AdminIndex;