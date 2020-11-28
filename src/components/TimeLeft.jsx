import React, {useState} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment);

const TimeLeft = ({
    sessionLength
}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength)
    let formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return(
        <div>
            {formatTimeLeft}
        </div>
    )
}

export default TimeLeft;