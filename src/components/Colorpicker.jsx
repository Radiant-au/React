import React, { useState } from 'react'

export default function Colorpicker() {

    const [color , setColor] = useState("#F1DEC6")
    const changeStyle = (event) =>{
      setColor(event.target.value);
    }

  return (
    <div className='grid place-content-center'>
        <div className='w-64 h-64 flex items-center justify-center text-xl border-red-900 border-2' style={{backgroundColor : color}}>
            <p>{color}</p>
        </div>
        <div className="mx-auto my-4">
            <input  type="color" value={color} className='w-20 h-10' onChange={changeStyle}/> 
        </div>
       
    </div>
  )
}
