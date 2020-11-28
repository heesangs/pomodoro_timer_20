import React, {useState} from 'react';

const TimeLeft = ({
    sessionLength
}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength)
    return(
        <div>
            {timeLeft}
        </div>
    )
}

export default TimeLeft;