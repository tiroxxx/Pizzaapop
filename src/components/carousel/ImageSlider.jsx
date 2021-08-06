import { useState } from 'react';
import { SLiderData } from './SliderData';

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length

  return (
    <>
      {SLiderData.map((slide, idx) => {
        return <img src={slide.image} alt="Pizzaapop Picture" />;
      })}
    </>
  );
}
