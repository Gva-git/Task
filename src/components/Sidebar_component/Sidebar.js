import React from 'react';
import { Button } from 'antd';
import './Sidebar.css';
import { SearchOutlined, TeamOutlined, FolderOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (
      <div className='sidebar_comp'>
          <div className='sidebar_container'>
              <div className='sidebar_list'>
                  <a className='sidebar_option'><SearchOutlined className='icon'/>Search</a>
                  <a className='sidebar_option'><TeamOutlined  className='icon'/>Accounts</a>
                  <a className='sidebar_option'><FolderOutlined  className='icon'/>Folder</a>
              </div>
              
              <div className='settings_bottom'>
                  
                  <Button className='settings_btn'><SettingOutlined className='icon' />Settings</Button>
              </div>
          </div>
      </div>
  );
}

export default Sidebar