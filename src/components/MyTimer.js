import React, { useState, useEffect } from 'react';

import { ReactComponent as ClockIcon } from '../icons/clock.svg'
import { ReactComponent as CalenderIcon } from '../icons/calendar.svg';
import './MyTimer.css';



function MyTimer(props) {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 0);
    }, []);
	
  
  // console.log(props.timerStatus);

    return (
        <div className="App timer">
            <CalenderIcon />
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <ClockIcon />
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </p>
            
        </div>
    );
}

export default MyTimer;