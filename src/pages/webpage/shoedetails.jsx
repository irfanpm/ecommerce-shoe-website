import React from 'react'
import Nav from './../../component/nav'
import { useContext } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/context';


const shoedetails = () => {
  const userProduct = useContext(Context)
  const { product } = userProduct
  const { pid } = useParams()
  const nav = useNavigate()

  const det = product.filter((x) => {
    return x.id == pid
  })
  return (
    <div>
      <div><Nav /></div>
      <div className='d-flex justify-content-center'>
        {
          det.map((x) => {
            return (

              <Card style={{ width: '100rem' }}  >
                <div className='d-flex'>
                  <Card.Img style={{ width: '50rem' }} variant="top" src={x.Image} />
                  <Card.Body style={{ width: '40rem' }}>
                    <Card.Title> <h1> {x.name}</h1></Card.Title>
                    <Card.Text>
                      <h3> ${x.price} </h3><br /><br />
                      <p className='fs-4'> {x.desc} </p>
                    </Card.Text>
                    <Button onClick={() => { nav(`/cart/${x.id}`) }} variant="primary">ADD TO CART</Button>
                  </Card.Body>
                </div>
              </Card>
            )

          })
        }

      </div>


    </div>
  )
}

export default shoedetails
