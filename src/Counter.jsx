import { useState } from 'react';

function Counter () {
    let [count, setCount] = useState(0);
    console.log("Component is rerendered");
    console.log(count);
    return (
        <div>
            <p>count is: {count}</p>
            <button onClick={() => {
                setCount(count + 1);
                console.log("value changes");
                console.log(count);
            }}>Increment</button>
        </div>
    )
}

export default Counter;