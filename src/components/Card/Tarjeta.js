import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './Tarjeta.css'
import img1 from '../../assets/1Despidos.jpg'
import img2 from '../../assets/2TrabajoEnNegro.jpg'
import img3 from '../../assets/3AccidentesTrabajo.jpg'
import img4 from '../../assets/4Acoso.png'
import img5 from '../../assets/5Suspension.jpg'
import img6 from '../../assets/6Indemnizacion.jpeg'
import img7 from '../../assets/7DiferenciaSalarial.jpg'
import img8 from '../../assets/8DiferenciaCategoria.jpg'
import img9 from '../../assets/9HorasExtra.jpg'
import img10 from '../../assets/10RenunciaForzada.jpg'
import img11 from '../../assets/11Discriminacion.png'
import img12 from '../../assets/12CondicionesTrabajo.jpg'

const Tarjeta = () => {
  return (
    <div>
        <CardGroup>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img1}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Despidos
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img2}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Trabajo en negro
                </CardTitle>
                <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img3}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Accidentes laborales
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img4}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Acoso y/o maltrato
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img5}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Suspensión laboral
                </CardTitle>
                <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img6}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Indemnizaciones
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img7}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Diferencia salarial
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img8}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Diferencia de categoría
                </CardTitle>
                <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img9}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Horas extra impagas
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img10}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Renuncia forzada
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img11}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Discriminación
                </CardTitle>
                <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
            <Card className='Card'>
                <CardImg
                alt="Card image cap"
                src={img12}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Cambio de condiciones de trabajo
                </CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </CardText>
                <Button>
                    Ver más
                </Button>
                </CardBody>
            </Card>
        </CardGroup>
    </div>
  )
}

export default Tarjeta
