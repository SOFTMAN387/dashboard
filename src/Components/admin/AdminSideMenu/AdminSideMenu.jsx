import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className='AdminSideMenu'>
      <Menu
        onClick={(item) => {
          navigate(item.key);

        }}
        items={[
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <AppstoreAddOutlined />
          },
          {
            label: "Products",
            key: "/dashboard/products",
            icon: <ShopOutlined />
          },
          {
            label: "Orders",
            key: "/dashboard/orders",
            icon: <ShoppingCartOutlined />
          },
          {
            label: "Customers",
            key: "/dashboard/users",
            icon: <UserAddOutlined />
          },

        ]} >

      </Menu>
    </div>
  )
}

export default AdminSideMenu