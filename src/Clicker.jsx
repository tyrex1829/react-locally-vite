function handleClick () {
    console.log("CLicked The Button!!!")
}

function handleHover () {
    console.log("HOVERED!!")
}

export default function Clicker () {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover me</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}