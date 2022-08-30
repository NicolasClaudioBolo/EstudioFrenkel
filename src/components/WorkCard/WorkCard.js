import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
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
                  <CardTitle tag="h3">
                      {work.title}
                  </CardTitle>
                  <CardText tag="p">
                      {work.description}
                  </CardText>
                </CardBody>
            </Card>
    </div>
  )
}

export default WorkCard
