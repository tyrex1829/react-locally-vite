export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    if(num1 === num2){
        return (
            <div>
                <h1>You Win!!</h1>
                <p>Num1: {num1}</p>
                <p>Num2: {num2}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>You Lose:(</h1>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
    
}