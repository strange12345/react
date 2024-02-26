import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ordersummary() {
  const navigate =useNavigate()
  return (
    <>
    <div>order-summary</div>
    <button onClick={()=>navigate(-1)}> go back</button>
    </>
  )
}
