import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.scss';
const Cards = ({id,name,mail,username}) => {
  return (
    <Card className="card-div">
        <Card.Img variant="top" className='card-img' src={`https://robohash.org/XM${id}.png?set=set2`}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{username}</Card.Title>

            <Card.Text>
                {mail}
            </Card.Text>
        </Card.Body>
  </Card>
  )
}

export default React.memo(Cards)