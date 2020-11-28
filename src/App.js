import './App.css';
import React, { useState } from 'react';
import Break from './components/Break';
import TimeLeft from './components/TimeLeft';
import Session from './components/Session';
import moment from 'moment';

function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25);
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
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes()
  //moment.js는 시간이 포함된 데이터를 받아 조작하기 좋다. 별도 공부가 필요하다. ㅜㅜ 
  //moment.duration(timeCount, unitOfTime)
  //==Session==
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
  const breakLengthInMinutes = moment.duration(breakLength, 's').minutes()
  //==Break==

  return (
    <div className="App">
      <Break
        breakLengthInMinutes={breakLengthInMinutes}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft
        sessionLength={sessionLength} />
      <Session
        sessionLengthInMinutes={sessionLengthInMinutes}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      />
    </div>
  );
}

export default App;
