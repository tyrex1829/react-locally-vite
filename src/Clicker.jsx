function handleClick () {
    console.log("CLicked The Button!!!")
}

export default function Clicker () {
    return (
        <div>
            <p>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}