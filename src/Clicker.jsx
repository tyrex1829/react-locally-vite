// function handleClick () {
//     console.log("Clicked")
// }

// function handleHover () {
//     console.log("HOVERED!!")
// }

export default function Clicker ({ message, buttonText }) {
    const handleClick = () => alert(message);
    return (
        <div>
            {/* <p onMouseOver={handleHover}>Hover me</p> */}
            <button onClick={ handleClick }>{ buttonText }</button>
        </div>
    );
}