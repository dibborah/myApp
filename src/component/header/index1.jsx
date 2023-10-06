import React, { useState } from 'react'

const Increment = ({IncrementState}) => {
    const data = 0;

    return (
        <>

        <button onClick={()=>IncrementState(data)}>+</button>

        </>
        
    )
}

export default Increment;


