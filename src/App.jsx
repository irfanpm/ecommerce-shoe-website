import { Route ,Routes} from 'react-router-dom'
import  Login from './pages/user/login'
import Register from './pages/user/Register'
import {Context} from './context/context'
import { useState } from 'react'
import Home from './pages/webpage/home'
import Men from './pages/webpage/men'
import {Products} from './data/products'
import Women from './pages/webpage/women'
import Collection from "./pages/webpage/collection";
import Search from './component/searchbar'
import Details from './pages/webpage/shoedetails'
import Cart from './pages/webpage/cartsection'
import Nav from './component/nav'
import Counter from './component/counter'
import Payment from './pages/webpage/paymentsection'
import Admin from './admin/adminpages/adminmain'
import Userlist from './admin/adminpages/userlist'
import Productlist from './admin/adminpages/productlist'
import Userdetails from './admin/adminpages/userdetails'
import Productdetails from './admin/adminpages/productdetails'
import Addproduct from './admin/adminpages/addproduct'












function App() {
  const [userState,setuserState]=useState([])
  const[product,setProduct]=useState(Products)
  const[userId,setId]=useState('')




  return (
    <>
    <Context.Provider value={{userState,setuserState,product,userId,setId,setProduct}}>

    <Routes>
      <Route path='/login/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={< Home/>}/>
      <Route path='/Men' element={< Men/>}/>
      <Route path='/Women' element={< Women/>}/>
      <Route path='/collection' element={< Collection/>}/>
      <Route path='/search' element={< Search/>}/>
      <Route path='/details/:pid' element={< Details/>}/>
      <Route path='/cart/:usid' element={< Cart/>}/>
      <Route path='/nav/:id' element={< Nav/>}/>
      <Route path='/counter' element={< Counter/>}/>
      <Route path='/payment/:total' element={< Payment/>}/>



      <Route path='/admin' element={userId=='admin'?< Admin/>:<Login/>}>
      <Route index element={< Userlist/>}/>
       <Route path='userlist' element={< Userlist/>}/> 
       <Route path='productlist' element={< Productlist/>}/> 
       <Route path='userdetails/:user' element={< Userdetails/>}/> 
       <Route path='productdetails/:prod' element={< Productdetails/>}/> 
       <Route path='productdetails/:prod' element={< Productdetails/>}/> 
       <Route path='addproduct'element={<Addproduct/>} />







      </Route>












    </Routes>


    </Context.Provider>
    </>
  )
}

export default App
