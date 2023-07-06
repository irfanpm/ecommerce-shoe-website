import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function userlist() {
    const nav=useNavigate()
    const userlist=useContext(Context)
    const {userState}=userlist
  return (
    <div>
        <div className='container mt-5'>

            {
                userState.map((x)=>{
                    return(
                        <Card onClick={()=>nav(`/admin/userdetails/${x.id}`)}>
                        <Card.Body>
                          <Card.Title>{x.user}</Card.Title>
                          <Card.Text>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )




                })
            }




        </div>



      
    </div>
  )
}

export default userlist



