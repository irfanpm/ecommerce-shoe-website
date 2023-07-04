import React, { useContext } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../context/context';






function nav() {
  const uid=useContext(Context)
  const{userId,setId}=uid

  const nv = useNavigate()
 
  return (
    <div className='row' >
      <div className='col-md-12'>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container fluid className='gap-5 ' >
          <Link to='/' style={{ textDecoration: 'none' }}><Navbar.Brand href="#"><h1>shoe</h1></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Link to='/men' style={{ textDecoration: 'none' }}> <Nav.Link href="#action1" className='fs-5 fw-bold'>Men</Nav.Link></Link>
              <Link to='/women' style={{ textDecoration: 'none' }}> <Nav.Link href="#action2" className='fs-5 fw-bold' >Women</Nav.Link></Link>
              <Link to='/collection' style={{ textDecoration: 'none' }}> <Nav.Link href="#action2" className='fs-5 fw-bold' >Collection</Nav.Link></Link>
              <Nav.Link  className='fs-5 fw-bold' >LookBook</Nav.Link>
              <Nav.Link  className='fs-5 fw-bold' >Sale</Nav.Link>





            </Nav>
            <Nav className=' gap-3'>
              <Nav.Link  className='fs-5 fw-bold' onClick={()=> {userId!=''? nv(`/cart/${userId}`):alert('please login') }}>cart</Nav.Link>
               
            {  ( userId != '')?

               <Nav.Link  onClick={()=>{
              nv('/login')
              setId(d=>d='')

               }} className='fs-5 fw-bold' >logout</Nav.Link>
              : <Nav.Link  onClick={()=>{
                nv('/login')
  
                 }} className='fs-5 fw-bold' >login</Nav.Link> }





            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>


    </div>
  )
}

export default nav
