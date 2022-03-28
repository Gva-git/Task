import React, {useState} from "react";
import './Slider_Card.css'
import { AppstoreFilled, UserSwitchOutlined, CarOutlined, LeftOutlined, UsergroupAddOutlined, RightOutlined } from '@ant-design/icons';
import { Divider, Button } from 'antd';

const Slider_Card = () => {
    const data = [
        {
          type: <AppstoreFilled />,
          name: 'Software Industry',
          value: 13,
        },
        {
          type: <UserSwitchOutlined />,
          name: 'IT Industry',
          value: 9,
        },
        {
          type: <CarOutlined />,
          name: 'Automobile Industry',
          value: 23,
        },
        {
          type: <UsergroupAddOutlined />,
          name: 'Manufacturing Industry',
          value: 8,
        },
    ];

    return (
        <div className="slider_main">
            {/* <h1>Slider</h1> */}
            <div className="slider_content">
                <Button className="left_slide_btn"><LeftOutlined /></Button>
                <div className="card1">
                    <div className="left_card">
                        <p className="cards_icons">{data[0].type}</p>
                        <p className="cards_name">{data[0].name}</p>
                    </div>
                    <h3 className="number">{data[0].value}</h3>
                </div>
                <Divider type="vertical" className="divider"/>
                <div className="card1">
                    <div className="left_card">
                        <p className="cards_icons">{data[1].type}</p>
                        <p className="cards_name">{data[1].name}</p>
                    </div>
                    <h3 className="number">{data[1].value}</h3>
                </div>
                <Divider type="vertical" />
                <div className="card1">
                    <div className="left_card">
                        <p className="cards_icons">{data[2].type}</p>
                        <p className="cards_name">{data[2].name}</p>
                    </div>
                    <h3 className="number">{data[2].value}</h3>
                </div>
                <Divider type="vertical" />
                <div className="card1">
                    <div className="left_card">
                        <p className="cards_icons">{data[3].type}</p>
                        <p className="cards_name">{data[3].name}</p>
                    </div>
                    <h3 className="number">{data[3].value}</h3>
                </div>
                <Button className="right_slide_btn"><RightOutlined /></Button>
            </div>
            
        </div>
    )
}

export default Slider_Card