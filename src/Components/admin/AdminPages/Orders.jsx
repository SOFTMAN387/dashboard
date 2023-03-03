import React from 'react'
import AdminHeader from '../AdminHeader/Header';
import AdminSideMenu from '../AdminSideMenu/AdminSideMenu';
import { Space } from 'antd';
import AdminFooter from '../AdminFooter/Footer';
import Order from '../pages/Orders';

const Orders = () => {
  return (<>
    <div className='AdminIndex'>
      <AdminHeader />
      <Space className="SideMenuAndPageContent">
        <AdminSideMenu />
        <Order />

      </Space>

      <AdminFooter />
    </div>
  </>

  )
}

export default Orders;