import React from "react";
import { useState } from "react";
// import { Button } from "react-bootstrap";

const MyHours = () => {
  // const initDate = null;
  const [clockInTime, setClockInTime] = useState("");
  const [clockOutTime, setClockOutTime] = useState("");
  const [timeDisplay, setTimeDisplay] = useState("");

  const clockIn = (event) => {
    event.preventDefault();
    let initDate = new Date();

    let clockInString = initDate.toLocaleTimeString([], { timeStyle: "short" });

    setClockInTime(clockInString);
    console.log(clockInString);
    // setNewDate(initDate);
  };
  const clockOut = (event) => {
    event.preventDefault();
    let initDateToo = new Date();

    let clockOutString = initDateToo.toLocaleTimeString([], {
      timeStyle: "short",
    });

    setClockOutTime(clockOutString);
    console.log(clockOutString);
    // setNewDate(initDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (clockInTime && clockOutTime === "") {
      console.log("you forgot to clock out");
    }else {
      console.log('you worked these hours', clockInTime, clockOutTime);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div className="bg-light border">
            <p>You Clocked In At {clockInTime}</p>
            <button onClick={clockIn} value={clockInTime}>
              Clock In
            </button>
            <p>You Clocked Out At {clockOutTime}</p>
            <button onClick={clockOut} value={clockOutTime}>
              Clock Out
            </button>
          </div>
          <h3></h3>
          <input type="submit" value="Submit" />
        </div>
        
      </form>
    </div>
  );
};

export default MyHours;
