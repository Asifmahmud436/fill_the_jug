import { useState,useEffect } from 'react'
import { nanoid } from 'nanoid'

import './App.css'

function App() {
  const [height,setHeight] = useState(0)
  const [water,setWater] = useState(0)

  useEffect(()=>{
    let waterVal = Math.floor(height*(1/6))
    setWater(waterVal)
  },[height])

  const waterEl = <div className='water-amount'>{water}%</div>

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
        <div className='water' 
        style={{
          backgroundColor :'white',
          height:height+'px',
          width:'200px'
          // backgroundColor :'white',
        }}>  
        </div>
        
      </div>

      {/* water percentage */}
      <div>
        {waterEl}
      </div>
      <div style={{
        display:'block'
      }}>
      <button onClick={increaseWater}>Increase</button>
      <button onClick={decreaseWater}>Decrease</button>
      </div>
      
    </>
  )
}

export default App
