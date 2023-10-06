import React, { useState } from 'react'

const Both = () => {
    const [state, stateChange] = useState(0);

   
        const Increment = ()=>{
            stateChange  (state + 1)
        }

        const Decrement = ()=>{
            stateChange  (state - 1)
        }
 

    return(
        <>

        <button onClick={Decrement}>-</button>
        {state}
        <button onClick={Increment}>+</button>

        </>
        
    )
}

export default Both;