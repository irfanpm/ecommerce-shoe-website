import React, { useContext, useState } from 'react'
import { Context } from '../../context/context'
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



function Productlist() {
    const {product,setProduct} = useContext(Context)
    const [state,setstate]=useState([])
    const nav=useNavigate()
    const click1=()=>{

        const value=product.filter((x)=>{
            return x.type=='men'
        })
        

        setstate(value)

         

    }
    const click2=()=>{

        const value=product.filter((x)=>{
            return x.type=='women'
        })
        setstate(value)

         

    }
    const click3=()=>{
        const value=product

        setstate(value)



    }

    

    



    return (
        <div>
            <br />
            <div>  
                <button onClick={()=>{nav('/admin/addproduct')}}>add product</button>


                <button onClick={click1}>men</button>  <button onClick={click2}>women</button>
                <button onClick={click3}>all</button>
                
                 {
                    state.map((x,i) => {
                        return(
                            <>
                        <Card  onClick={()=>nav(`/admin/productdetails/${x.id}`)}>
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                             
                            </Card.Body>
                        </Card>
                           <button onClick={()=>{setProduct(product.filter((y)=> y.id!=x.id));setstate(state.filter((x,j)=>j!=i))}}>delete</button>
                           </>
                        )


                    })
                } 
            </div>

        </div>
    )
}

export default Productlist
