import React from 'react'
import {  useParams } from 'react-router-dom'
import {ListGroup,Card} from 'react-bootstrap'
import { useContext } from "react";
import { Context } from '../../context/context';


function userdetails() {
    const {userState}=useContext(Context)
    const { user }=useParams()

    const userinfo=userState.filter((x)=>{
        return x.id==user


    })

  return (
    <div className='text-center'>
      <div className='container mt-5'>
       { userinfo.map((x)=>{
        return(
            <Card >
            <Card.Header> <h1> <label htmlFor="">USER NAME:</label> {x.user}</h1></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><h2><label htmlFor="">USER FULL NAME:</label> {x.fname}{x.lname}</h2></ListGroup.Item>
              <ListGroup.Item><h2> <label htmlFor="">USER EMAIL:</label> {x.email}</h2></ListGroup.Item>
              <ListGroup.Item> <h2><label htmlFor="">USER PASSWORD:</label> {x.pwd}</h2></ListGroup.Item>

            </ListGroup>

            <h1>cart</h1>
            <div className='d-flex justify-content-center'>
              

            {x.prd.map((x)=>{
              return ( <div  >

               <Card style={{ width: '10rem' }}>
                 <Card.Img variant="top" src={x.Image} />
                 <Card.Body>
                   <Card.Title>{x.name}</Card.Title>
                   <Card.Text>
                     ${x.price}
                   </Card.Text>
                 </Card.Body>
               </Card></div>)






            })}
            </div>

          </Card>




        )




       })
}
    </div>
    </div>
  )
}

export default userdetails
