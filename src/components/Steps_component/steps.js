import React from 'react';
import { Steps, Divider } from 'antd';
import 'antd/dist/antd.css';
import './steps.css'

const { Step } = Steps;

const steps = () => {
    return (
        <Steps progressDot current={1} direction="horizontal" size='small'>
            <Step title="Work"/>
            <Step title="Education" />
            <Step title="Health Care" />
            <Step title="Transport" />
            <Step title="Shopping" />
            <Step title="F&B" />
            <Step title="Population" />
            <Step title="Heat Map" />
        </Steps>
        // <div className='stepper'>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Work</p>
        //         <p className='dots_active'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Education</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Health Care</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Transport</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Shopping</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>F&B</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Population</p>
        //         <p className='dots'></p>
        //     </div>
        //     <div className='steps_style'>
        //         <p className='steps_name'>Heat Map</p>
        //         <p className='dots'></p>
        //     </div>
        // </div>
    )
}

export default steps