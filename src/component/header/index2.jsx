// import React, { useState } from 'react'

const Decrement = ({state , DecrementState}) => {
    const value = 0;
   
    return(
        <>

        {state}
        <button onClick={()=>DecrementState(value)}>-</button>

        </>
        
    )
}

export default Decrement;

