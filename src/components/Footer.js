import React from 'react';
import './Footer.css';
import {UnorderedListOutlined, BarChartOutlined} from '@ant-design/icons';
import { Button } from 'antd'

const Footer = () => {
    return (
        <div className='footer_content'>
            <div className='foot_wrap'>
                <div className='foot'>
                    <Button><UnorderedListOutlined /></Button>
                    <Button><BarChartOutlined /></Button>
                </div>
                
                <p className='folder'>Version Folder</p>
            </div>
            <p className='freeze'>Freeze Version</p>

        </div>
    )
}

export default Footer