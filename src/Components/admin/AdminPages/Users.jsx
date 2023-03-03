import React from 'react'
import AdminHeader from '../AdminHeader/Header';
import AdminSideMenu from '../AdminSideMenu/AdminSideMenu';
import { Space } from 'antd';
import AdminFooter from '../AdminFooter/Footer';
import User from '../pages/Users';

const Users = () => {
  return (<>
    <div className='AdminIndex'>
      <AdminHeader />
      <Space className="SideMenuAndPageContent">
        <AdminSideMenu />
       <User />

      </Space>

      <AdminFooter />
    </div>
  </>

  )
}

export default Users;