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
      <div className='container '>
        

        {
          det.map((x) => {
            return (

              <Card  >
                <div className='d-flex flex-column flex-lg-row w-100 align-items-center'>
                  <Card.Img className='w-50 ' variant="top" src={x.Image} />
                  <Card.Body  c >
                    <Card.Title> <h2> {x.name}</h2></Card.Title>
                    <Card.Text>
                      <h3> ${x.price} </h3><br /><br />
                      <p className=' w-75'>Auctor eros suspendisse tellus venenatis sodales purus non pellentesque  
                       , nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus,
                        lectus enim eget eu et lobortis faucibus.Auctor eros suspendisse tellus venenatis sodales purus non pellentesque  
                       , nunc sit eu, enim</p>
                    </Card.Text>
                    <Button onClick={() => { nav(`/cart/${x.id}`) }} variant="primary" >ADD TO CART</Button>
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
