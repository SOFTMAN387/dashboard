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

      <div className="admin_Footer">
        <AdminFooter />
      </div>
    </div>
  </>

  )
}

export default Orders;