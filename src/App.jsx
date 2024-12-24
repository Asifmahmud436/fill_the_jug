import { useState } from 'react'
import { nanoid } from 'nanoid'

import './App.css'

function App() {
  const [height,setHeight] = useState(0)

  function increaseWater(){
    if(height!=600){
      setHeight(prev=>prev+100)
    }
  }
  function decreaseWater(){
    if(height!=0){
      setHeight(prev=>prev-100)
    }
  }
  return (
    <>
      <div className='jug'>
        
        
      <div
        style={{
          backgroundColor: 'white',
          width: "200px",
          height: height+'px',
        }}
        className='water'
      ></div>
        
      </div>
      <button onClick={increaseWater}>Increase</button>
      <button onClick={decreaseWater}>Decrease</button>
    </>
  )
}

export default App
