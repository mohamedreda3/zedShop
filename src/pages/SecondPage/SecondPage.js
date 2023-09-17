import React from 'react'
import './secondpage.css'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import BranchiesTerms from './BranchiesTerms/BranchiesTerms'
import Costs from './Costs/Costs'
import FormSubmit from './FormSubmit/FormSubmit'
import Header from '../../layout/otherHeader'
import Banner from '../../layout/banner'
const SecondPage = () => {
  return (
    <div className='secondpage'>
      {/* <WhyChooseUs/> */}
      <Header />
      <Banner />
      <div className="franchise">
        <div className="right">
          <BranchiesTerms/>
          <Costs/>
        </div>
        <FormSubmit/>
      </div>
    </div>
  )
}

export default SecondPage
