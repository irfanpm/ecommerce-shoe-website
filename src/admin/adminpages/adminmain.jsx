import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'




function adminmain() {
  const nav=useNavigate()
  return (
    <div  className='row h-100 '>
       
       <div style={{background:'black',maxWidth:'15rem',}} className='col text-center ' >
         <h1 className='text-white'>Admin</h1>
         <br />
         <br />

         <h3 className='text-white' onClick={()=>nav('/admin/userlist')}>user</h3>
         <br />
         <br />
         <h3 className='text-white'  onClick={()=>nav('/admin/productlist')}>Product</h3>

         


       </div>
       <div className='col '>
       <div  className='text-center ' style={{height:'15%'}} >
        <h1>Hello Admin</h1>

        <button onClick={()=>nav('/login')} className='float-end'>logout</button>

       </div>
       <div  className='h-75'>
        <Outlet/>

        


       </div></div></div>
      
  )
}

export default adminmain
