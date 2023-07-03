import React, { useContext } from 'react'
import { Card, Form, Button } from "react-bootstrap";
import { Context } from '../../context/context';

function addproduct() {

    const { product, setProduct } = useContext(Context)
    const submit = (event) => {
        event.preventDefault()
       
        const productname = event.target.name.value
        const productprice = event.target.price.value
        const productimage = event.target.image.value
        const productdesc = event.target.desc.value
        const producttype=event.target.type.value


        setProduct([...product, { id: Math.random(), qty: 1,type:producttype, name: productname, price: productprice, Image: productimage, desc: productdesc }])

        event.target.reset()



    }
    return (
        <div>
            <div className='mt-5'>
                <Card className='container   p-4  ' style={{ width: '25rem', }} >
                    <h1 style={{ textAlign: 'center' }} >Add product</h1> <br /><br />
                    <form className='d-flex flex-column ' onSubmit={submit} >
                        <Form.Label>Type</Form.Label>
                        <Form.Select 
                        id='type'
                        className=' border border-secondary'
                        placeholder="type"
                
                        >
                            <option value="men">men</option>
                            <option value="women">Women</option>
                        </Form.Select>

                        <br />
                        <Form.Label>Product name</Form.Label>
                        <Form.Control
                            type="Text"
                            className=' border border-secondary'
                            placeholder="name"
                            id='name'
                            required
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>price</Form.Label>
                        <Form.Control type="number"
                            placeholder="price"
                            className=' border border-secondary '
                            id='price'
                            required
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control
                            type="text"
                            className=' border border-secondary'
                            placeholder="imaage"
                            id='image'
                            required
                            style={{ height: '50px' }} />
                        <br />

                        <Form.Label>description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            className='border border-secondary'
                            id='desc'
                        />


                        <br />

                        <Button variant="primary" type="submit" className='w-25'>
                            Submit
                        </Button>
                    </form>


                </Card>
            </div>



        </div>
    )
}

export default addproduct
