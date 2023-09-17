import React from 'react'
import "./style.css"
import { LocationOnOutlined } from '@mui/icons-material'
import { Slide } from 'react-awesome-reveal'
function FoundUs() {
    return (
        <section id='found_us'>
            <Slide direction='down'> <h3 className='section__title'>أين تجدنا</h3> </Slide>
            <div className="section_data">
                <ul className="__data">
                    <Slide direction='right'> <h3>العناوين</h3> </Slide>
                    <Slide direction='right' delay={120}> <li>
                        <span><LocationOnOutlined /></span>
                        <a href='#'>القاهرة</a>
                    </li>
                        <li>
                            <span><LocationOnOutlined /></span>
                            <a href='#'>الجيزة</a>
                        </li>
                        <li>
                            <span><LocationOnOutlined /></span>
                            <a href='#'>القاهرة الكبرى</a>
                        </li>
                    </Slide>
                </ul>
                <div className="map">
                    <Slide>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xF04-IA2OV4igqhQo5MuRPLjlqvZdsU&ehbc=2E312F" width="640" height="480"></iframe>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default FoundUs
