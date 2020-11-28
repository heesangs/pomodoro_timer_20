import React from 'react';

const Break = ({
    breakLengthInMinutes,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute
}) => {

    return (
        <div>
            <p id="break-label">break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
            <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
        </div>
    )
}

export default Break;