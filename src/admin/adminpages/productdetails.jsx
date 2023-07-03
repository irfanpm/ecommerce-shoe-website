import React, { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { useParams } from 'react-router-dom'
import { Card, Form,Button } from 'react-bootstrap'
Context
function productdetails() {
  const { product } = useContext(Context)
  const { prod } = useParams()
  const productinfo = product.filter((x) => x.id == prod)
  const [t, sett] = useState(true)
  console.log(product)





  return (
    <div className='d-flex justify-content-center'>
      {
        productinfo.map((x) => {
          return (
            <>
              <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={x.Image} />
                <Card.Body>
                  <Button onClick={() => sett(a => !a)}>edit</Button>
                  {(t !== true) ?
                    <div>
                      <form action=" " onSubmit={(event) => {
                        event.preventDefault()

                          event.target.Image.value != '' ? x.Image = event.target.Image.value : null
                          event.target.name.value!=''?x.name = event.target.name.value:null
                          event.target.price.value!=''?x.price = event.target.price.value:null
                          event.target.desc.value!=''? x.desc = event.target.desc.value:null

                        sett(a => !a)





                      }}>

                        <Form.Control
                          type="url"
                          className=' border border-secondary'
                          placeholder="image"
                          id='Image'
                          style={{ height: '50px' }} />
                        <br />

                        <Form.Control
                          type="text"
                          className=' border border-secondary'
                          placeholder={x.name}
                          id='name'
                          style={{ height: '50px' }} />
                        <br />

                        <Form.Control
                          type="number"
                          className=' border border-secondary'
                          placeholder={x.price}
                          id='price'
                          style={{ height: '50px' }} />
                        <br />

                        <Form.Control
                          type="Text"
                          className=' border border-secondary'
                          placeholder="description"
                          id='desc'
                          style={{ height: '50px' }} />
                        <br />
                        <button >sumbit</button>



                      </form>
                    </div> : <> <Card.Title> <h2> {x.name}</h2></Card.Title>
                      <Card.Text>
                        {x.desc} <br /><br />
                        ${x.price}
                      </Card.Text></>
                  }

                </Card.Body>

              </Card>

            </>



          )
        })
      }

    </div>
  )
}

export default productdetails
