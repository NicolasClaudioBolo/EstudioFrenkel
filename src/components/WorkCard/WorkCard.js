import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import './WorkCard.css'

const WorkCard = ({job}) => {

  const work = job

  return (
    <div>
            <Card>
                <CardImg
                alt="Card image cap"
                src={work.img}
                top
                width="100%"
                />
                <CardBody>
                  <CardTitle tag="h2">
                      {work.title}
                  </CardTitle>
                  <CardText tag="h5">
                      {work.description}
                  </CardText>
                </CardBody>
            </Card>
    </div>
  )
}

export default WorkCard
