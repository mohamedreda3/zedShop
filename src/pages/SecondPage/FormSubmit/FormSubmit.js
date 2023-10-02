import React from 'react';
import './formsubmit.css';
import { AiOutlineUser, AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { PhoneOutlined } from '@mui/icons-material';
const FormSubmit = () => {
  return (
    <div className="formsubmit">
      <div>
        <p>
          سجل الأن وأحد المسؤولين بالاستثمار سيقوم بالتواصل معك للتعرف على كل
          الشروط للاستثمار فى (زذ)
        </p>
      </div>
      <form action="">
        <div>
          <AiOutlineUser />
          <input type="text" name="name" placeholder="من فضلك ادخل الإسم" />
        </div>
        <div>
          <AiFillPhone />
          <input type="text" name="phone" placeholder="من فضلك ادخل رقم الهاتف" />
        </div>
        <button>سجل الأن</button>
      </form>
      <div>
        <MdEmail />
        <div>
          <p>أو من خلال تقديم طلبك لإدارة الاستثمار على البريد الإلكتروني:</p>
          <a href="mailto:zshop.wg@gmail.com">zshop.wg@gmail.com</a>
        </div>
      </div>
      <div className="contactphone">
        <AiFillPhone />
        <div>
          <p>
            {" "}
            <li>
              <span>
                <PhoneOutlined />
              </span>
              <a href="tel:+201120066668">01120066668</a> -
              <a href="tel:+201118176006">01118176006</a>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
