import React from 'react'
import Nav from '../../component/nav'
import Main from '../../component/main1'
import Search from '../../component/searchbar'



function home() {
  return (
    <div>

      <div>
        <Nav />
      </div>

      <div>
        <Main />
      </div>
      <div className='d-flex justify-content-center'>
        <Search />
      </div>


    </div>



  )
}

export default home

