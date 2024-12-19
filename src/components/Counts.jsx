import React, { useState } from 'react'

const Counts = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
     <button onClick={() => setCount((count => count + 1)) }>Increase</button>
     <h1> Conut : {count} </h1> 
     <button onClick={() => setCount((count => count - 1))}>Decrease</button>

    </div>
  )
}


export default Counts
