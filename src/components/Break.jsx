import React from 'react';
import { useState } from 'react';
import moment from 'moment'

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
    const breakLengthInMinutes = moment.duration(breakLength,'s').minutes()
    //moment.js는 시간이 포함된 데이터를 받아 조작하기 좋다. 별도 공부가 필요하다. ㅜㅜ 
    //moment.duration(timeCount, unitOfTime)
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