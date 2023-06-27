import React from 'react'
import Nav from './../../component/nav'
import { useContext } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';



function collection() {
  const userProduct = useContext(Context)
  const { product } = userProduct
  const nav = useNavigate()
  return (
    <div>
      <div>
        <Nav />


      </div>
      <div className='d-flex gap-5 justify-content-center mt-5'>
        {
          product.map((x) => {
            return (
              <div onClick={() => { nav(`/details/${x.id}`) }}>

                <Card style={{ width: '28rem' }}>
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                      ${x.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card></div>)


          })



        }
      </div>

    </div>
  )
}

export default collection
