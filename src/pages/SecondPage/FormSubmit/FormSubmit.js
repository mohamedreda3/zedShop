import React from 'react'
import './formsubmit.css'
import {AiOutlineUser,AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
const FormSubmit = () => {
  return (
    <div className='formsubmit'>
      <div>
        <p>سجل الأن وأحد المسؤولين بالاستثمار سيقوم بالتواصل معك للتعرف على كل الشروط للاستثمار فى (زذ)</p>
      </div>
      <form action="">
        <div>
          <AiOutlineUser/>
          <input type="text" placeholder='من فضلك ادخل الإسم'/>
        </div>
        <div>
          <AiFillPhone/>
          <input type="text" placeholder="من فضلك ادخل رقم الهاتف"/>
        </div>
        <button>سجل الأن</button>
      </form>
      <div>
        <MdEmail/>
        <div>
          <p>أو من خلال تقديم طلبك لإدارة الاستثمار على البريد الإلكتروني:</p>
          <a href="mailto:investor@zed.com">investor@zed.com</a>
        </div>
      </div>
      <div className='contactphone'>
        <AiFillPhone/>
        <div>
          <p><a href="tel:2332">2332</a>أو التواصل معنا عبر الخط الساخن </p>
          
        </div>
      </div>
    </div>
  )
}

export default FormSubmit
