import React from 'react';
import { banner } from '../../data/bannerData';
import "./style.css";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { ArrowBack, PlayArrowOutlined } from '@mui/icons-material';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
function Banner() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const navigate = useNavigate();
  return (
    <section id="home">
      <AutoplaySlider
        play={true}
        interval={3500}
        bullets={false}
        animation="cubeAnimation"
      >
        {banner?.map((item, index) => (
          <div
            className="banner"
            style={{
              background: `linear-gradient(to top, #00000091, #00000091), url(${item.image})`
            }}
            key={index}
          >
            <Slide triggerOnce>
              <div id="banner">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="btns">
                  <button className="btn btn-success" onClick={()=>window.open("https://youtu.be/o2L8-p8XGAA","_blanck")}>
                    <span>
                      <PlayArrowOutlined />
                    </span>
                    <span >شاهد الفيديو</span>
                  </button>
                  <button className="btn btn-success" onClick={() => window.open("http://wataneyagroup.foodics.online/", "_blanck")}>
                    <span>
                      {" "}
                      اطلب الآن{" "}
                    </span>
                    <span>
                      <ArrowBack />
                    </span>
                  </button>
                </div>
              </div>
            </Slide>
            <a href="#about" class="scroll-indicator">
              <div class="mouse">
                <div class="scroll-wheel"></div>
              </div>
            </a>
          </div>
        ))}
      </AutoplaySlider>
    </section>
  );
}

export default Banner;
