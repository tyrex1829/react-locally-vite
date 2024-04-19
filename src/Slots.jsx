export default function Slots ({ val1, val2, val3 }) {

    const isWinner = val1 === val2 && val1 === val3;
    
    const loseStyle = { color: "red" };
    const winStyle = { color: "green" };
    
    return (
        <div>
            <h1>
                {val1}{val2}{val3}
            </h1>
            <h2>
                { isWinner ? "You Win!" : "You lose" }
            </h2>
            { isWinner && <h3>Congrats</h3> }
        </div>
    );
}








// export default function Slots ({ val1, val2, val3 }) {
    
//     const loseStyle = { color: "red" };
//     const winStyle = { color: "green" };

//     return (
//         <div>
//             <h1>
//                 {val1}{val2}{val3}
//             </h1>
//             { (val1 === val2 && val1 === val3) ? <><p style={ winStyle }>You Win</p><p>congrats</p></> : <p style={ loseStyle }>You lose</p> }
//         </div>
//     )
// }