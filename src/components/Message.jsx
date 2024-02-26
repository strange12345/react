import React, { useState } from 'react'


export default function Message() {
    const [value ,setvalue]=useState('hello visitor');

    const eventhandle=()=>{
        setvalue('thank you for subscription');
    }

  return (
    <>
    <div>{value}</div>
    <button onClick={eventhandle}>subscribe</button>
    </>
  )
}
