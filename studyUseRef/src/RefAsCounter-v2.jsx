import { useRef } from "react";
import React from "react";

export default function RefAsCounter() {

    const counterRef = useRef(0);

    function increaseCounter() {
        counterRef.current++;
    }

    function showCounter() {
        alert('The button was clicked ' + counterRef.current + ' times')
    }
    return(
        <>
            <h1>useRef as an alternative an useState</h1>
            <button onClick={increaseCounter}>Click</button>&nbsp;
            <button onClick={showCounter}>Show how many times the button was clicked</button>
        </>
    )

}