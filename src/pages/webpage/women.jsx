import React from 'react'
import Nav from './../../component/nav'

import { useContext } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import Footer from '../../component/footer';





const women = () => {
  const userProduct = useContext(Context)
  const { product } = userProduct
  const womenshoe = product.filter((x) => x.type == 'women')
  const nav = useNavigate()



  return (
    <div>
      <div>
        <Nav />


      </div>
      <div className='container gap-5'>
        
        <div className='row 'style={{background:' rgb(230, 230, 217)'}}>
          <h1>Women</h1>
        {
          womenshoe.map((x) => {
            return (
              <div onClick={() => { nav(`/details/${x.id}`) }} className='col-lg-4 col-6 mt-3'>

                <Card style={{maxwidth: '48rem' }}className='hovereffect' >
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
      <Footer/>


    </div>
  )
}

export default women
