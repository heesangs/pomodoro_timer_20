import React from 'react';
import { useState } from 'react';

const Break = () => {
    const [breakLength, setBreakLength] = useState(300);
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    }
    const decrementBreakLengthByOneMinute = () => {
        let decrementBreakLength = breakLength - 60
        if (decrementBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(decrementBreakLength);
        }


    }
    return (
        <div>
            <p id="break-label">break</p>
            <p id="break-Length">{breakLength}</p>
            <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
            <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
        </div>
    )
}

export default Break;