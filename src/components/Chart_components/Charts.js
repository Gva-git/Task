import React from "react";
import './Charts.css';
import { Column, Pie } from '@ant-design/plots';
import { Button } from "antd";

const Charts = () => {
    const data = [
        {
          type: 'Software',
          name: 'Software Industry',
          value: 13,
        },
        {
          type: 'IT',
          name: 'IT',
          value: 9,
        },
        {
          type: 'Automobile',
          name: 'Automobile',
          value: 23,
        },
        {
          type: 'Manufacturing',
          name: 'Manufacturing',
          value: 8,
        },
    ];

    const config = {
        data,
        xField: 'type',
        yField: 'value',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        // meta: {
        //   type: {
        //     alias: '类别',
        //   },
        //   sales: {
        //     alias: '销售额',
        //   },
        // },
    }

    const pie_config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'center',
            },
            content: 'Total',
          },
        },
        
      };

    return (
        <div className="chart_wrap">
            <div className="chart_wrap_container">
                <div className="left">
                    <div className="chart_nav">
                        <Button className="chart_buttons_active">Total Industry</Button>
                        <Button className="chart_buttons">Industry Rating</Button>
                        <Button className="chart_buttons">Industry Review</Button>
                        <Button className="chart_buttons">Industry Dis.Radius</Button>
                    </div>
                    <Column {...config} className='chart_bar'/>
                </div>
                <div className="right">
                    <div className="pie_chart">
                        <Pie {...pie_config} className='pie_bar'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts