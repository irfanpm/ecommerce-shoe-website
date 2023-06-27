import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import nav from './nav';
import { Context } from '../context/context';




function counter({ cartqty }) {
  const [count, setcount] = useState(cartqty.qty)
  console.log(cartqty);
  const userid = useContext(Context)
  const { userId, setId } = userid

  const nav = useNavigate()





  return (
    <div>
      <h1>${cartqty.price * cartqty.qty}</h1>



      <button onClick={() => {

    
          setcount(count => count + 1)
        
        cartqty.qty = count
        nav(`/cart/${userId}`)


      }

      }>-</button>
      <h2 >{cartqty.qty}</h2><button onClick={() => {
          setcount(count => count - 1)
        cartqty.qty = count
        nav(`/cart/${userId}`)

      }}>-</button>

    
      <br />

    

    </div>
  )
}

export default counter
