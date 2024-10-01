import React from 'react'

interface Tprops{
    name:string,
    rollno:number,
    day:string,
    campus:string
}



const Card = (props:Tprops) => {
  return (
    <div className="max-w-sm  mx-auto mt-16 border rounded-2xl pl-2 p-3 shadow-xl border-black bg-slate-50">
        <h1 className='text-center font-extrabold font-serif'>ID Card</h1><hr className=' border-black mb-3 my-1'></hr>
        <h1 className='text-center font-bold' ><u>QUARTER 2</u></h1>
        <h1><b>Name:</b>{props.name}</h1>
        <h1><b>Roll number:</b>{props.rollno}</h1>
        <h1><b>Day:</b>{props.day}</h1>
        <h1><b>Timing:</b> 2pm - 5pm</h1>
        <h1><b>Campus:</b>{props.campus}</h1>
    </div>
  )
}

  

export default Card