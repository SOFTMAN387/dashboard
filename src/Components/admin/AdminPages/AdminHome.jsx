import { DollarCircleOutlined, OrderedListOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Typography,Card, Statistic } from 'antd';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';


ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
 );
 


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
         }}/>} title={"Customers"} value={305} />
         <DashboardCard icon={<OrderedListOutlined 
            style={{
            color:"purple",
            backgroundColor:"rgba(0,255,0,0.25)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }}
         />}title={"Orders"} value={13} />
         <DashboardCard icon={<ShopOutlined
         style={{
            color:"yellow",
            backgroundColor:"rgba(0,0,255,0.5)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }} />} title={"Products"} value={105} />
         <DashboardCard icon={<DollarCircleOutlined
         style={{
            color:"red",
            backgroundColor:"rgba(255,0,0,0.25)",
            borderRadius:20,
            fontSize:24,
            padding:8
         }} />}title={"Revenue"} value={25000} />
        </Space>
       
         <Card style={{height:"300px",width:"600px"}}>
         <AdminChrtjs />
         </Card>
      
        
      
    </div>
  </>
  )
}


function AdminChrtjs(){
   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
   const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => Math.random()*100),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => Math.random()*100),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
   const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' ,
        },
        title: {
          display: true,
          text: 'Orders Revenue',
        },
      },
    };
   return <Bar options={options} data={data} />
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