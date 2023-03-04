import { Space, Table, Typography,Avatar, Button } from 'antd';
import React,{useState,useEffect} from 'react';
import { getOrders } from '../../../API/BackendData';

const Orders = () => {
  const [loading,setLoading]=useState(true);
  const [dataSource,setDataSource]=useState([]);
  useEffect(()=>{
    getOrders().then(res=>{
  setDataSource(res.products);
  setLoading(false);
})
  },[]);


  return (
   <>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Recent Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
          {
            title: "Status",
           render:()=>{
            return(<>
                <span>Pending</span>
                <Button style={{backgroundColor:"rgba(34, 140, 228, 0.5)",marginLeft:"5px"}}>Next</Button>
            </>)
           }
          },
          {
            title: "DELETE",
            render:()=>{
            return(<Button style={{backgroundColor:"red",color:"white"}}>Delete</Button>)
           }
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 4,
        }}
      ></Table>
    </Space>
   </>
  )
}

export default Orders;