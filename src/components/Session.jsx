import React from 'react';
import { useState } from 'react';
import moment from 'moment'

const Session = () => {
    const [sessionLength, setSessionLength] = useState(300);
    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    }
    const decrementSessionLengthByOneMinute = () => {
        let decrementSessionLength = sessionLength - 60
        if (decrementSessionLength < 0) {
            setSessionLength(0);
        } else {
            setSessionLength(decrementSessionLength);
        }
    }
    const sessionLengthInMinutes = moment.duration(sessionLength,'s').minutes()
    //moment.js는 시간이 포함된 데이터를 받아 조작하기 좋다. 별도 공부가 필요하다. ㅜㅜ 
    //moment.duration(timeCount, unitOfTime)
    return (
        <div>
            <p id="session-label">session</p>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
            <button id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
        </div>
    )
}

export default Session;