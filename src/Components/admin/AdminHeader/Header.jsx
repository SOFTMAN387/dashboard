import React from 'react'
import { Image, Space, Typography,Badge } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <>
      <div className='AdminHeader'>
        <Image width={40}
          src=""
        > </Image>
        <Typography.Title>SoftMan DashBoard</Typography.Title>
        <Space >
        <Badge count={10}  >
          <MailOutlined style={{fotSize:24}} />
        </Badge>
        <Badge dot>
        <BellFilled style={{fotSize:24}} />
        </Badge>
         

        </Space>
      </div>

    </>)
}

export default Header;