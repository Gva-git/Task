import React,{useState} from 'react';
import './Prediction.css'
import {MoreOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';
import Charts from '../components/Chart_components/Charts';
import Slider_Card from '../components/SliderCard_component/Slider_Card'
import Steps from '../components/Steps_component/steps';

const Prediction = () => {

  return (
    <div className='body_content'>
      <div className='topBar_container'>

        {/* TopBar */}
        <div className='top_bar_pred'>
          <h4 className='name_top'>Ashirvad - Villa</h4>
          <p className='address_top'>Malles | T.Nagar, Chennai</p>
        </div>
        <div className='top_bar_list_left_pred'>
          <Button className='pred_button_active' onClick={() => console.log('Pressed')}>Market Analysis</Button>
          <Button className='pred_button' onClick={() => console.log('Pressed')}>Competition</Button>
          <Button className='pred_button' onClick={() => console.log('Pressed')}>TG Analysis</Button>
          <Button className='pred_button' onClick={() => console.log('Pressed')}>Media Plan</Button>
          <Button className='pred_button' onClick={() => console.log('Pressed')}><MoreOutlined /></Button>
        </div>
      </div>


      <div className='body_part'>
        <div className='top_2_nav'>
          <div className='content-list-top'>
            <div className='goBack'>
              <a><ArrowLeftOutlined className='arrow_icon' /></a>
              <p className='unnamed'>Unnamed</p>
            </div>
            <div>
              <p className='edit_text'>Edit</p>
            </div>
          </div>
        </div>
        {/* Timeline */}
        <div className='steps_wrap'>
          <Steps className='steps_component'/>
        </div>
        {/* slider */}
        <div className='slider_wrap'>
          <Slider_Card />
        </div>
        {/* piechart */}
        <div className='app_chart_wrap'>
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default Prediction