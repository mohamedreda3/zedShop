import React from 'react';
import "./style.css";
import { LocationOnOutlined } from '@mui/icons-material';
import { Slide } from 'react-awesome-reveal';
function FoundUs() {
  return (
    <section id="found_us">
      <Slide direction="down">
        {" "}
        <h3 className="section__title">أين تجدنا</h3>{" "}
      </Slide>
      <div className="section_data">
        <ul className="__data">
          <Slide direction="right">
            {" "}
            <h3>العناوين</h3>{" "}
          </Slide>
          <Slide direction="right" delay={120}>
            {" "}
            <li>
              <span>
                <LocationOnOutlined />
              </span>
              <a href="#"> القطامية نادي الصيد : منفذ رقم 7 أسفل حمام السباحة </a>
           
            </li>
            <li>
              <span>
                <LocationOnOutlined />
              </span>
              <a href="#"> المهندسين : 59 شارع المدينة المنورة من جامعة الدول العربية - الدقي </a>
              <div>
                {" "}
                <a href="tel:3360104">3360104</a> -{" "}
                <a href="tel:3360103">3360103</a>
              </div>
            </li>
            <li>
              <span>
                <LocationOnOutlined />
              </span>
              <a href="#"> مصر الجديدة : 13 شارع إبراهيم النجار من شارع إبراهيم ياسر دائرة النزهة </a>
              <div>
                {" "}
                <a href="tel:21811109">21811109</a> -{" "}
                <a href="tel:21811107">21811107</a>
              </div>
            </li>
            <li>
              <span>
                <LocationOnOutlined />
              </span>
              <a href="#"> مدينة نصر : 2 شارع حلمي حسن المنطقة الثامنة - متفرع من مكرم عبيد </a>
              <div>
                {" "}
                <a href="tel:22728703">22728703</a> -{" "}
                <a href="tel:22728704">22728704</a>
              </div>
            </li>
          </Slide>
        </ul>
        <div className="map">
          <Slide>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1xF04-IA2OV4igqhQo5MuRPLjlqvZdsU&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default FoundUs;
