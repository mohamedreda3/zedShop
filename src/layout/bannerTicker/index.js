import React, { useEffect } from 'react';
import "./style.css";

function BannerTicker() {
  useEffect(() => {
    var ticker = document.querySelector('.ticker'),
      list = document.querySelector('.ticker__list'),
      clone = list.cloneNode(true);
    ticker.append(clone);
  }, []);

  return (
    <div class="smallTicker">
      <div class="ticker">
        <div class="ticker__list">
          <div class="ticker__item">
            <img
              src="https://images.pexels.com/photos/9705830/pexels-photo-9705830.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div class="ticker__item">
            <img
              src="https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div class="ticker__item">
            <img
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div class="ticker__item">
            <img
              src="https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTicker;
