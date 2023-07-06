import React from 'react'
import Nav from '../../component/nav'
import Main from '../../component/main1'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../component/footer';






function home() {
  return (
    <div className='row' >

      <div className='col-md-12 '>
        <Nav />
      </div>
     

      <div className=''>
        <Main />
      </div>
      <div className='d-flex justify-content-center'>
        
      </div>
      <br /><br />
      <div>
        <Footer/>
      </div>


    </div>



  )
}

export default home

