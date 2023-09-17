import React from 'react';
import "./style.css";
import { Slide } from 'react-awesome-reveal';

function About() {
  return (
    <section id="about" style={{ marginTop: "20px !important" }}>
      <Slide direction="down">
        {" "}
        <h3 className="section__title">عن الشركة</h3>
      </Slide>
      <p>
        <Slide direction="up">
          <p style={{ fontSize: "20px" }}>
            نحن شركة رائدة في مجال تعبئة وتغليف المنتجات الغذائية ومنتجات اللحوم
            والدواجن. نتفهم أهمية توفير حلول تعبئة عالية الجودة وموثوقة
            لعملائنا. نحن ملتزمون بتقديم خدمات ممتازة تلبي احتياجاتك في مجال
            التعبئة والتغليف بكفاءة واحترافية.
          </p>

          <p style={{ fontSize: "14px" }}></p>
        </Slide>
      </p>

      <div className="about">
        <Slide direction="right">
          <div className="about__section__data">
            <h3>قيمنا ومهمتنا</h3>{" "}
            <p>
              قيمنا تستند إلى الاحترافية، والجودة، والاستدامة. نحن نعتقد في
              الشفافية والنزاهة في كل عملية تعبئة وتغليف نقوم بها. نحن نهتم
              بالمحافظة على البيئة ونسعى لتقديم خدمات صديقة للبيئة.
            </p>
            <p style={{ margin: "18px 0" }}>
              نحن شركة رائدة في مجال تعبئة وتغليف المنتجات الغذائية ومنتجات
              اللحوم والدواجن. نتفهم أهمية توفير حلول تعبئة عالية الجودة وموثوقة
              لعملائنا. نحن ملتزمون بتقديم خدمات ممتازة تلبي احتياجاتك في مجال
              التعبئة والتغليف بكفاءة واحترافية.
            </p>
          </div>
        </Slide>
        <Slide direction="left">
          <img
            src={require("../../assets/images/pexels-caio-64613.jpg")}
            alt=""
          />
        </Slide>
      </div>
    </section>
  );
}

export default About;
