import React, { useState } from 'react'

export default function () {
    let [thu,setThu]=useState('light');
    let [avo,setAvo]=useState(10);
    let butt=()=>{
        setAvo(avo++)
        console.log(avo)    
    }
    let theme=()=>{
        setThu('dark')
    }

  return (
    <>
    <div style={{backgroundColor: thu=='light' ?'white':'black'} }> 
    <button onClick={theme} >Change theme</button>
        <h1>
            
            {thu}{avo}
        </h1>
        <button onClick={butt} className='border-2' >  
            Click Me!
        </button>

    </div>


    </>
  )
}
