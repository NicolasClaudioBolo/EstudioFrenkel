import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import './Pics.css';
const items = [
  {
    src: require('../../assets/Justicia.jpg'),
    key: 0,
    altText: 'Nos especializamos en:',
    caption: 'Nos especializamos en:'
  },
  {
    src: require('../../assets/1Despidos.jpg'),
    key: 1,
    altText: 'Despidos',
    caption: 'Despidos'
  },
  {
    src: require('../../assets/2TrabajoEnNegro.jpg'),
    key: 2,
    altText: 'Trabajo sin registrar / "en negro"',
    caption: 'Trabajo sin registrar / "en negro"'
  },
  {
    src: require('../../assets/3AccidentesTrabajo.jpg'),
    key: 3,
    altText: 'Accidentes en el trabajo y enfermedades',
    caption: 'Accidentes en el trabajo y enfermedades'
  },
  {
    src: require('../../assets/7DiferenciaSalarial.jpg'),
    key: 7,
    altText: 'Diferencias salariales',
    caption: 'Diferencias salariales'
  },
  {
    src: require('../../assets/9HorasExtra.jpg'),
    key: 9,
    altText: 'Horas extra',
    caption: 'Horas extra'
  }
];

function Pics(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-danger"
          captionHeader={item.caption}
        />
        <img src={item.src} alt={item.altText} className='img-fluid w-100' />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} className='carousel-size'>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Pics;