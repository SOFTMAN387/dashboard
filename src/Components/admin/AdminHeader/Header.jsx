import React from 'react'
import { Image, Space, Typography,Badge } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <>
      <div className='AdminHeader'>
        <Image width={40} style={{borderRadius:"50%"}}
          src="/images/manishgupta.jpg"
        > </Image>
        <Typography.Text level={4}>SoftMan DashBoard</Typography.Text>
        <Space >
        <Badge  dot >
          <MailOutlined style={{fotSize:24}} />
        </Badge>
        <Badge  count={10} >
        <BellFilled style={{fotSize:24}} />
        </Badge>
         

        </Space>
      </div>

    </>)
}

export default Header;