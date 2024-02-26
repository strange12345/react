import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
export default function Stopwatch() {

    const [time,setTime]=useState(0)
    const [running,setrunning]= useState(true)

    const timer=useRef()
    useEffect(()=>{
        if(running){
            timer.current= setInterval(()=>{
                setTime(pre => pre+1)
            },1000)
        }
        return ()=>clearInterval(timer.current)

    },[running])





    const format=(time)=>{
        let hours=Math.floor(time/60/60%24)
        let minutes=Math.floor(time/60%60)
        let seconds=Math.floor(time%60)

        hours=hours<10 ? '0' +hours:hours
        minutes=minutes< 10 ? '0' +minutes :minutes
        seconds=seconds< 10 ? '0' +seconds :seconds

        return hours+":"+minutes+":"+seconds



    }
  return (
    
    <>
    <div>{format(time)}</div>
    <button className="btn btn-info" onClick={()=> setTime(0)}>restart</button>
    <button className='btn btn-danger' onClick={()=> {
        if (running)clearInterval(time.current)
        setrunning(!running)
    }}>{running ? 'stop' : 'resume'}</button>
    </>

  )
}

