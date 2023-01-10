import React from 'react'
import { useNavigate } from 'react-router-dom'

function BasketOrder({total}) {
    const navigate = useNavigate();
    function handleAccept() {
        // ssdandnasds
        navigate("/")
    }
  return (
    <div>
        <h2>Total price : {total.toFixed(2 )}</h2>
        <button onClick={handleAccept}>Accept</button>
    </div>
  )
}

export default BasketOrder