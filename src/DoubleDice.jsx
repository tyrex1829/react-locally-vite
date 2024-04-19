export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const isWinner = num1 === num2;
    
    const divStyles = { backgroundColor: "#000", padding: "30px", marginBottom: "20px", borderRadius: "20px", color: isWinner ? "green" : "red" };

    const h1Styles = { color: "purple" };

    return (
        <div className="DoubleDice" style={divStyles}>
            <h1 style={h1Styles}>Double Dice</h1>
            {isWinner && <h3>You Win!!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}









// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
    
//     return (
//         <div>
//             <h1>Double Dice</h1>
//             {num1 === num2 ? <h3>You Win!!</h3> : null}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }






// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
    
//     return (
//         <div>
//             <h1>{num1 === num2 ? "You Win!!" : "You Lose:("}</h1>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
    
// }