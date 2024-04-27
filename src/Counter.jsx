import { useState } from 'react';

function Counter () {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p>count is: {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
        </div>
    )
}

export default Counter;