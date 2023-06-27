import React, { useEffect, useState, useRef, useId } from 'react'
import { useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/context';
import { Card, Button } from 'react-bootstrap';
import Nav from '../../component/nav';
import Counter from '../../component/counter';








function cartsection() {

  const { usid } = useParams()
  const userProduct = useContext(Context)
  const { product } = userProduct
  const userDetails = useContext(Context)
  const { userState, setuserState } = userDetails
  const userid = useContext(Context)
  const { userId, setId } = userid
  const nav=useNavigate()



  if (usid != userId) {


    const productData = product.filter((productitem) => {
      return productitem.id == usid
    })

    const result = [...productData]
    const productobject = result[0]



    console.log(productData);
    for (let index in userState) {
      if (userId == userState[index].id) {

        const arr = userState[index].prd.filter((p => p.id == productobject.id))

        arr.length == 0 ? userState[index].prd.push({ ...productobject }) : null



      }



    }

  }

  for (let i in userState) {
    if (userId == userState[i].id) {
      



      var indexOfuser = i

    }



  }








  console.log(userState[indexOfuser].prd);
  const [cartstate, setcartstate] = useState(userState[indexOfuser].prd)



  const dele = (index) => {

    setcartstate(cartstate.filter((x, i) => i !== index))




  }
  userState[indexOfuser].prd = cartstate







  var total = 0;

  for (const valueproduct of cartstate) {

    total = total + (valueproduct.qty * valueproduct.price)
    console.log(total);
  }





















  return (
    <div>
      <div> <Nav /> </div>

      <h1 style={{ textAlign: 'center' }}>Cart</h1>
      <div className='d-flex'>
        {

          cartstate.map((cartvalue, cartindex) => {
            return (<div className=' container '> <Card style={{ width: '28rem' }} >
              <Card.Img variant="top" src={cartvalue.Image} />
              <Card.Body>
                <Card.Title>{cartvalue.name}</Card.Title>
                <Card.Text>

                  <Counter cartqty={cartvalue} />
                </Card.Text>
                <h2> </h2>

                <button variant="primary" onClick={() => dele(cartindex)}>delete  </button>

              </Card.Body>
            </Card></div>)
          })


        }







      </div>
      <div className='text-center'>

      <p className=' fs-1'>{total}</p>         
      <Button variant="primary" onClick={()=>nav(`/payment/${total}`)}>payment</Button>

      


      </div>

    </div>)
}

export default cartsection
