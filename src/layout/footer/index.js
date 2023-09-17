import React from 'react';
import "./style.css";
import {
  ArrowBack,
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  LocationOnOutlined,
  PhoneOutlined,
  Twitter
} from '@mui/icons-material';
import { Slide } from 'react-awesome-reveal';
function Footer() {
  return (
    <footer>
      <div className="footer_form_contact">
        <Slide direction="down">
          <h6>تابعنا عبر البريد الالكتروني</h6>
        </Slide>
        <Slide direction="up">
          <form action="#">
            <input type="email" required placeholder="أدخل بريدك االكتروني" />
            <button className="btn btn-success">
              <ArrowBack />
            </button>
          </form>
        </Slide>
      </div>
      <div className="footer">
        <Slide direction="up">
          <div className="footer_id">
            <div className="logo">
              <img
                src={require("../../assets/logo/image-001-PhotoRoom.png-PhotoRoom.png")}
                alt=""
              />
            </div>
            <div className="id">
              <h2>سلسلة محلات زد</h2>
              <p>
                نحن نهتم بتوزيع منتجاتك بكفاءة عالية عبر قنوات التجزئة الرئيسية،
                مما يضمن وصول منتجاتك إلى أكبر عدد ممكن من الزبائن. ولضمان أعلى
                مستوى من الجودة والاستدامة، نقوم بعمليات سيطرة دقيقة على الجودة
                والاحترافية في كل مرحلة من مراحل التعبئة والتغليف.
              </p>
            </div>
          </div>
        </Slide>

        <div className="footer_lists">
          <Slide direction="up" delay={130}>
            {/* <div className="footer_list">
              <h6>روابط مهمة</h6>
              <ul>
                <li>
                  <a href="#">المميزات</a>
                </li>
                <li>
                  <a href="#">السياسة والخصوصية</a>
                </li>
                <li>
                  <a href="#">تواصل معنا</a>
                </li>
              </ul>
            </div>
            <div className="footer_list">
              <h6>روابط أخري</h6>
              <ul>
                <li>
                  <a href="#">الرئيسية</a>
                </li>
                <li>
                  <a href="#">المدونة</a>
                </li>
                <li>
                  <a href="#">الأسئلة الشائعة</a>
                </li>
                <li>
                  <a href="#">تسجيل الدخول</a>
                </li>
              </ul>
            </div> */}
            <div className="footer_list">
              <h6>اتصل بنا</h6>
              <ul>
                <li>
                  <span>
                    <LocationOnOutlined />
                  </span>
                  <a href="#">مصر - طنطا -سبرباي</a>
                </li>
                <li>
                  <span>
                    <PhoneOutlined />
                  </span>
                  <a href="tel:2332">2332</a>
                </li>
                <li>
                  <span>
                    <EmailOutlined />
                  </span>
                  <a href="mailto:investor@zed.com">investor@zed.com</a>
                </li>
              </ul>
            </div>
            <div className="footer_list social">
              <h6>تواصل معنا</h6>
              <p>تابعنا على منصات التواصل الاجتماعي</p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookOutlined />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </Slide>
        </div>
      </div>
      <Slide direction="up">
        <p style={{ textAlign: "center" }}>
          &copy; جميع الحقوق محفوظة لدى شركة كامب كودينج{" "}
        </p>
      </Slide>
    </footer>
  );
}

export default Footer;
