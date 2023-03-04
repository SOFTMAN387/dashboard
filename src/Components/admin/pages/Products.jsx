import { Space, Table, Typography,Avatar,Rate, Button } from 'antd';
import React,{useState,useEffect} from 'react';
import { getInventory } from '../../../API/BackendData';

const Products = () => {
  const [loading,setLoading]=useState(true);
  const [dataSource,setDataSource]=useState([]);
  useEffect(()=>{
  getInventory().then(res=>{
  setDataSource(res.products);
  setLoading(false);
})
  },[]);


  return (
   <>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Products</Typography.Title>
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
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Edit",
            render: () => {
              return <Button  style={{backgroundColor:"green",color:"white"}}>Edit</Button>;
            },
          },
          {
            
            title: "Delete",
            render: () => {
              return <Button style={{backgroundColor:"red",color:"white"}}>Delete</Button>;
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
   </>
  )
}

export default Products;