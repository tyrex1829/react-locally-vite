function Counter () {
    let num = 0;
    return (
        <div>
            <p>count is {num}</p>
            <button onClick={() => {
                num += 1;
            }}>Increment</button>
        </div>
    )
}

export default Counter;