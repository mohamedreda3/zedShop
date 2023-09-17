import React from 'react'
import './whychooseus.css'
// import { services } from '../../../data/servicesData'
// import { services } from '../../../data/servicesData'
import { ArrowBack } from '@mui/icons-material'
import { Slide } from 'react-awesome-reveal'
import { benefities } from '../../../data/Benifitiesdata'
const WhyChooseUs = () => {
  return (
    <div className='whychooseus'>
      <h5>Why Choose Us</h5>
      <div className="services benefities">
      {
        benefities.map((item, index) => {
          return <div className="service benefit">
            <Slide direction='up' delay={100 * index}>
              <div className="s__icon" style={{ background: index % 2 === 0 ? "var(--main-color-1-alpha)" : "var(--main-color-2-alpha)" }}>
                  <img src={item.image} alt="" />
              </div>
              <div className="s__title">
                  <h6>{item.text}</h6>
              </div>
              <div className="s__text">
                  <p>{item.title}</p>
              </div>
              {/* <div className="s__button">
                  <button className='btn btn-success' style={{ background: index % 2 === 0 ? "var(--main-color-1)" : "var(--main-color-2)", border: index % 2 === 0 ? ".7px solid var(--main-color-1)" : ".7px solid var(--main-color-2)", }}>
                      <span>اطلب الآن</span>
                      <span><ArrowBack /></span>
                  </button>
              </div> */}
            </Slide>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default WhyChooseUs
