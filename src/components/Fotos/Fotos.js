import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import '../NavBar/NavBar.css'
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
    altText: 'Trabajo en negro',
    caption: 'Trabajo en negro'
  },
  {
    src: require('../../assets/3AccidentesTrabajo.jpg'),
    key: 3,
    altText: 'Accidentes laborales',
    caption: 'Accidentes laborales'
  },
  {
    src: require('../../assets/4Acoso.png'),
    key: 4,
    altText: 'Acoso y/o maltrato en el espacio de trabajo',
    caption: 'Acoso y/o maltrato en el espacio de trabajo'
  },
  {
    src: require('../../assets/5Suspension.jpg'),
    key: 5,
    altText: 'Suspensión laboral',
    caption: 'Suspensión laboral'
  },
  {
    src: require('../../assets/6Indemnizacion.jpeg'),
    key: 6,
    altText: 'Indemnización',
    caption: 'Indemnización'
  },
  {
    src: require('../../assets/7DiferenciaSalarial.jpg'),
    key: 7,
    altText: 'Diferencia salarial',
    caption: 'Diferencia salarial'
  },
  {
    src: require('../../assets/8DiferenciaCategoria.jpg'),
    key: 8,
    altText: 'Diferencia de categoría',
    caption: 'Diferencia de categoría'
  },
  {
    src: require('../../assets/9HorasExtra.jpg'),
    key: 9,
    altText: 'Horas extra impagas',
    caption: 'Horas extra impagas'
  },
  {
    src: require('../../assets/10RenunciaForzada.jpg'),
    key: 10,
    altText: 'Renuncia forzada',
    caption: 'Renuncia forzada'
  },
  {
    src: require('../../assets/11Discriminacion.png'),
    key: 11,
    altText: 'Discriminación',
    caption: 'Discriminación'
  },
  {
    src: require('../../assets/12CondicionesTrabajo.jpg'),
    key: 12,
    altText: 'Malas condiciones de trabajo',
    caption: 'Malas condiciones de trabajo'
  }
];

class Fotos extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
          <img src={item.src} alt={item.altText} className='img-fluid w-100' />
          <CarouselCaption captionHeader={item.caption}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Fotos;