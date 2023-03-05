import React from 'react'
import AdminHeader from '../AdminHeader/Header';
import AdminSideMenu from '../AdminSideMenu/AdminSideMenu';
import { Space } from 'antd';
import AdminFooter from '../AdminFooter/Footer';
import Product from "../pages/Products";

const Products = () => {
  return (<>
    <div className='AdminIndex'>
      <AdminHeader />
      <Space className="SideMenuAndPageContent">
        <AdminSideMenu />
        <Product />

      </Space>

      <div className="admin_Footer">
        <AdminFooter />
      </div>
    </div>
  </>

  )
}

export default Products;