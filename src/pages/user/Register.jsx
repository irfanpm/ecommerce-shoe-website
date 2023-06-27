import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from "react-bootstrap";
import { Context } from '../../context/context';
import { useNavigate ,Link} from 'react-router-dom';



function Register() {
    const nav = useNavigate()
    const userDetails = useContext(Context)
    const { userState, setuserState } = userDetails
    const submit = (event) => {
        event.preventDefault()

        const Fname = event.target.fname.value
        const Lname = event.target.lname.value
        const User = event.target.us.value
        const Email = event.target.email.value
        const Pwd = event.target.pwd.value

        if(User=='Admin'){

            alert('already this username')
        }
        // }else if(Pwd.length<7){

        //     alert('the password must have 8 letter')
        // }
        else {


        setuserState([...userState, { id: Math.random(), fname: Fname, lname: Lname, user: User, email: Email, pwd: Pwd, prd: [] }])


        console.log(userState)

        nav('/login')
        }





              
    }



    return (

        <div>
            <div className='mt-5'>
                <Card className='container   p-4  ' style={{ width: '25rem', }} >
                    <h1 style={{textAlign:'center'}} >Register Page</h1> <br /><br />
                    <form className='d-flex flex-column ' onSubmit={submit}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="Text"
                            className=' border border-secondary'
                            placeholder="First Name"
                            id='fname'
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Text"
                            placeholder="Last Name"
                            className=' border border-secondary '
                            id='lname'
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            className=' border border-secondary'
                            placeholder="User Name"
                            id='us'
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            className=' border border-secondary'
                            placeholder="Enter email"
                            id='email'
                            style={{ height: '50px' }} />
                        <br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            className=' border border-secondary'
                            placeholder="password"
                            id='pwd'
                            style={{ height: '50px' }} />
                        <br />



                        <Button variant="primary" type="submit" className='w-25'>
                            Submit
                        </Button>
                    </form>
                    <Link to='/login'>login  account</Link>


                </Card>
            </div>






        </div>
    )
}





export default Register
