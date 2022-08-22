import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import './Pics.css'
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
      {/* <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style> */}
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

// class Fotos extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}>
//           <img src={item.src} alt={item.altText} className='img-fluid w-100' />
//           <CarouselCaption captionHeader={item.caption}/>
//         </CarouselItem>
//       );
//     });

//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//         className='carousel-size'>
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//       </Carousel>
//     );
//   }
// }


export default Pics;