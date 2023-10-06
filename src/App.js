// MAKE A PARENT COMPONENT IN REACT WHICH HAS A BUTTON TO INCREMENT 

// MAKE A CHILD COMPONENT IN REACT WHICH HAS A BUTTON TO DECREMENT AND ALSO SHOW THE VALUE OF THE STATE IN CHILD RETURN 

import React , { useEffect, useState } from 'react'
import Increment from "./component/header/index1"
import Decrement from "./component/header/index2"

function App() {

  // state to manage both incre and decre
  const [state, stateChange] = useState(0);

  // increment function here

    const IncrementState = (data) => {
      console.log(data);
      stateChange  ((data)=>data + 1)
      console.log( "Increment is running..." )
    };


  const DecrementState = (value) => {
    stateChange  ((value)=> value - 1)
    console.log( "Decrement is running..." )
}

  return (
    <div>   

      {/* <button onClick={IncrementState}> + </button> */}
      
      <Increment  
      IncrementState = {IncrementState}
      />

      <Decrement 
      state = {state} 
      DecrementState = {DecrementState}
      />

    </div>
  )
}

export default App;



