
import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);


    

    const increse = ()=> {
        setCount(count+1);
        
    }
    const decrese =()=> {
        setCount(count-1);
    }
    const reset = ()=> {
       setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increse}>+</button>
            <button onClick={decrese}>-</button><br></br>
        <br></br>
            <button onClick={reset}>Reset</button>
        </div>
    )
}