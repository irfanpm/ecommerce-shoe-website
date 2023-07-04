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
      <div className=' gap-5 container '>
        <div className='row '>
        {
          product.map((x) => {
            return (
              <div onClick={() => { nav(`/details/${x.id}`) }} className='col-lg-4 col-6'>

                <Card style={{ maxwidth: '48rem' }}>
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                      ${x.price}
                    </Card.Text>
                  </Card.Body>
                </Card></div>)


          })



        }
        </div>
      </div>

    </div>
  )
}

export default collection
