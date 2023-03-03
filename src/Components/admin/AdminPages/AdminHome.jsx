import { DollarCircleOutlined, OrderedListOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Typography,Card, Statistic } from 'antd';
import React from 'react'

const AdminHome = () => {
  return (
  <>
    <div>
        <Typography.Title level={4}>Dashboard</Typography.Title>
       
        <Space direction='horizontal'>
         <DashboardCard icon={<UserOutlined style={{
            color:"green",
            backgroundColor:"rgba(0,255,0,0.25)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }}/>} title={"Customers"} value={12345} />
         <DashboardCard icon={<OrderedListOutlined 
            style={{
            color:"purple",
            backgroundColor:"rgba(0,255,0,0.25)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }}
         />}title={"Orders"} value={12345} />
         <DashboardCard icon={<ShopOutlined
         style={{
            color:"yellow",
            backgroundColor:"rgba(0,0,255,0.5)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }} />} title={"Products"} value={12345} />
         <DashboardCard icon={<DollarCircleOutlined
         style={{
            color:"red",
            backgroundColor:"rgba(255,0,0,0.25)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }} />}title={"Revenue"} value={12345} />
        </Space>
       

        
      
    </div>
  </>
  )
}

function DashboardCard({title,value,icon}){
    return(
        <Card>
        <Space direction='horizontal'>
       {icon}
        <Statistic title={title} value={value}/>
        </Space>
        </Card>
    )
}

export default AdminHome;