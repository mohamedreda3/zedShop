import React from 'react';
import "./style.css";
import { services } from '../../data/servicesData';
import { ArrowBack } from '@mui/icons-material';
import { Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
function Services() {
  const navigate = useNavigate();

  return (
    <serction id="services">
      <Slide direction="down">
        {" "}
        <h3 className="section__title">خدماتنا</h3>
      </Slide>
      <p style={{ fontSize: "16px" }}>
        <Slide direction="up">
          {" "}
          نقدم حلاً كاملاً لاحتياجات تعبئة وتغليف منتجاتك، بدءًا من تصميم عبوات
          مبتكرة وجذابة تساعد منتجاتك على التميز في السوق وتجذب العملاء. نحن
          نتيح لك أيضًا فرصة الاستفادة من تخصيص العبوات والتغليف وفقًا
          لاحتياجاتك الخاصة. بالإضافة إلى ذلك، نقدم خدمات الفحص والجودة للتأكد
          من تماثل وجودة منتجاتك قبل التغليف. نحن نهتم بتوزيع منتجاتك بكفاءة
          عالية عبر قنوات التجزئة الرئيسية، مما يضمن وصول منتجاتك إلى أكبر عدد
          ممكن من الزبائن. ولضمان أعلى مستوى من الجودة والاستدامة، نقوم بعمليات
          سيطرة دقيقة على الجودة والاحترافية في كل مرحلة من مراحل التعبئة
          والتغليف.
        </Slide>
      </p>
      <div className="services">
        {services.map((item, index) => {
          return (
            <div className="service">
              <Slide direction="up" delay={100 * index}>
                <div
                  className="s__icon"
                  style={{
                    background:
                      index % 2 === 0
                        ? "var(--main-color-1-alpha)"
                        : "var(--main-color-2-alpha)"
                  }}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className="s__title">
                  <h6>{item.title}</h6>
                </div>
                <div className="s__text">
                  <p>{item.text}</p>
                </div>
                <div className="s__button">
                  <button
                    className="btn btn-success"
                    style={{
                      background:
                        index % 2 === 0
                          ? "var(--main-color-1)"
                          : "var(--main-color-2)",
                      border:
                        index % 2 === 0
                          ? ".7px solid var(--main-color-1)"
                          : ".7px solid var(--main-color-2)"
                    }}
                   
                  >
                    <span onClick={() => window.open("http://wataneyagroup.foodics.online/", "_blanck")}>
                      اطلب الآن
                    </span>
                    <span>
                      <ArrowBack />
                    </span>
                  </button>
                </div>
              </Slide>
            </div>
          );
        })}
      </div>
    </serction>
  );
}

export default Services;
