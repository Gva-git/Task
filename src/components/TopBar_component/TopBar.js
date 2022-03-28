import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import Logo from '../../assets/logo.jpeg'

const TopBar = () => {
  return (
    <div className='top_bar_comp'>
        <div className='top_bar_container'>
          <div className='logo'>
            <img src={Logo}/>
          </div>
          <div className='top_bar_list_left'>
            <a className='list_top_bar_active' href='/'>Prediction</a>
            <a className='list_top_bar' href='Performance'>Performance</a>
            <a className='list_top_bar' href='Engagement'>Engagement</a>
          </div>

          <ul className='top_bar_list_right'>
            <li className='icons_list'><BellOutlined className='icons'/></li>
            <li className='icons_list'><MailOutlined className='icons'/></li>
          </ul>
        </div>
    </div>
  );
}

export default TopBar