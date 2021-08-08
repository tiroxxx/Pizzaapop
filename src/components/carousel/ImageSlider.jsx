import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './imageSlider.css';

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
      {SliderData.map((slide, idx) => {
        return (
          <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
            {idx === current && (
              <img className="image" src={slide.image} alt="Pizzaapop" />
            )}
          </div>
        );
      })}
    </section>
  );
}
