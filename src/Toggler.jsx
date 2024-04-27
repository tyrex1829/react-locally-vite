import { useState } from "react";

function Toggler () {
    const [isHappy, setIsHappy] = useState(true);

    const toggleIsHappy = () => setIsHappy(!isHappy);

    return <p onClick={toggleIsHappy} style={{ fontSize: "5rem", cursor: "pointer" }}>{isHappy ? "😀" : "😔"}</p>
}

export default Toggler