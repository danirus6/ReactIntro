import React from 'react'
import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialCount)

    const increment = () => {
        setCount(count + props.multiplier);
    };
    const decrement = () => {
        setCount(count - props.multiplier);
    };
    return (

        <div>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>

        </div>
    )
}
export default Counter
