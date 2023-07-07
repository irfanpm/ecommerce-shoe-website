import React from 'react'
import { useParams } from 'react-router-dom'
import {Card,ListGroup,Form,Button} from 'react-bootstrap';
import Nav from '../../component/nav';



function paymentsection() {

  
  const {total}= useParams()
  const value=parseInt(total)
  const  shipping=50
  let TotalAmount=0
  TotalAmount=value+shipping
  return (
    <>
    <Nav/>
    <div className=' container p-5 '>
      <div className='row'>
      <div className=' col-md-6 mt-5'>
        <h3>order summery</h3><br />

        <Card style={{ maxWidth: '38rem' }}>
      <Card.Header>        <h3>payments</h3>
</Card.Header>
      <ListGroup variant="flush text-right">
        <ListGroup.Item className='h-5 '><h3 > total payment: <span className='float-end'> {total} </span></h3></ListGroup.Item>
        <ListGroup.Item className='h-5'><h3>shipping: <span className='float-end'> {shipping}</span></h3></ListGroup.Item>
        <ListGroup.Item className='h-5'> <h3> TotalAmount:<span className='float-end'> { TotalAmount}</span></h3></ListGroup.Item>
      </ListGroup>
    </Card>

        </div>
        <div className='col-md-6 mt-5 '>
          <h3>select payment method</h3>
          <Card >
      <Card.Body>
        <Card.Text>

          <form action="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of cards</Form.Label>
        <Form.Control style={{height:'50px'}} type="text" placeholder="Enter Name of Card" />
        <br />
        <Form.Label> cards number</Form.Label>
        <Form.Control style={{height:'50px'}} type="number" placeholder="Enter cardNumber" />
        <br />
        <Button type="submit">pay now</Button>
        

      </Form.Group>


          </form>
     
         
        </Card.Text>
       
      </Card.Body>
    </Card>

        </div>
        <div>

        </div>
        </div>
    </div></>
  )
}

export default paymentsection
