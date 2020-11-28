import React, { useState, useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment);

const TimeLeft = ({
    sessionLength
}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    //useEffect를 사용하자. 
    //componentDidMount와 유사하다. 
    useEffect(() => {
        setTimeLeft(sessionLength)
    }, [sessionLength])
    //[sessionLength]에 변화가 일어날때만 useEffect를 실행한다. 
    let formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
        <div>
            {formatTimeLeft}
        </div>
    )
}

export default TimeLeft;