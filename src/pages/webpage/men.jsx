import React from 'react'
import Nav from './../../component/nav'
import { useContext } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';



const men = () => {
  const userProduct = useContext(Context)
  const { product } = userProduct
  const menshoe = product.filter((x) => x.type == 'men')
  const nav = useNavigate()


  return (
    <div>
      <div>
        <Nav />


      </div>
      <div className='container gap-5'>
      <div className=' row '>

        {
          menshoe.map((x) => {
            return (
              <div onClick={() => { nav(`/details/${x.id}`) }} className='col-lg-4 col-6'>
                <Card style={{ maxwidth: '48rem'  }} >
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                     ${x.price}
                    </Card.Text>
                  </Card.Body>
                </Card> </div>)


          })



        }
        </div>
      </div>
    </div>
  )
}

export default men
