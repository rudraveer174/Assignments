import React from 'react'
import { useState } from "react";

function Count() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

  return (
    <div>
        <button onClick={handleDecrement}>decrement</button>
        <label>{count}</label>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Count