import React from 'react';

const Session = (props) => {
    return (
        <div>
            <p id="session-label">session</p>
            <p id="session-length">{props.sessionLengthInMinutes}</p>
            <button id="session-increment" onClick={props.incrementSessionLengthByOneMinute}>+</button>
            <button id="session-decrement" onClick={props.decrementSessionLengthByOneMinute}>-</button>
        </div>
    )
}

export default Session;