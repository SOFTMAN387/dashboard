import { Typography } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div className='AdminFooter'>
      <Typography.Link href='#' >+123456789</Typography.Link>
      <Typography.Link href='https://www.google.com' target={"_blank"} >Privacy Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target={"_blank"} >Terms of Use</Typography.Link>
    </div>
  )
}

export default Footer