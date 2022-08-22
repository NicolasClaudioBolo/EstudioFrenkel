import React from 'react'
import despidosImg from '../../assets/1Despidos.jpg'
import trabajoEnNegroImg from '../../assets/2TrabajoEnNegro.jpg'
import accidentesTrabajoimg from '../../assets/3AccidentesTrabajo.jpg'
import diferenciaSalarialImg from '../../assets/7DiferenciaSalarial.jpg'
import { Container } from 'reactstrap'
import horasExtrasImg from '../../assets/9HorasExtra.jpg'
import WorkCard from '../WorkCard/WorkCard'

const Work = () => {
    const cards = [
        {
            img: despidosImg,
            title: "Despidos",
            description: "Si te despidieron o te dejaron sin trabajo te tienen que indemnizar. Contactanos, calcularemos sin costo lo que te corresponde y te ayudaremos a obtenerlo."
        },
        {
            img: trabajoEnNegroImg,
            title:'Trabajo sin registrar / "en negro"',
            description:"Si sos monotributista, no te dan recibos de sueldo o te pagan parte del sueldo en mano es muy probable que tu empleador no esté respetando tus derechos laborales. Contactanos para corregir la situación o reclamar las indemnizaciones que te corresponden."
        },
        {
            img: accidentesTrabajoimg,
            title:"Accidentes de trabajo y enfermedades",
            description:"Si te accidentás o sufrís una enfermedad que te impide trabajar, contactanos y te asesoraremos en la mejor manera de proceder.",   
        },
        {
            img: diferenciaSalarialImg,
            title:"Diferencias salariales",
            description:"Cada actividad, oficio o profesión tiene sus particularidades, escalas salariales y adicionales. Contactanos para analizar si te están pagando correctamente o reclamar lo que te corresponde"
        },
        {
            img: horasExtrasImg,
            title:"Horas extra",
            description:"Si te quedás trabajando después de hora, si trabajás los fines de semana o feriados, te corresponde el pago de horas extras. Consultanos."
        }
    ]
    return (
        <div>
            {cards.map((job, i)=>{

             return <Container className='my-5'>
                        <WorkCard job={job} key={i} />
                    </Container>
            })}
        </div>
        )
}

export default Work
