import { useState } from "react";
import React from "react";

export default function RefAsCounter() {

    const [counter, setCounter] = useState(0)

    function increaseCounter() {
        setCounter(counter + 1)
    }

    function showCounter() {
        alert('The button was clicked ' + counter + ' times')
    }
    return(
        <>
            <h1>useRef as an alternative an useState</h1>
            <button onClick={increaseCounter}>Click</button>&nbsp;
            <button onClick={showCounter}>Show how many times the button was clicked</button>
        </>
    )

}