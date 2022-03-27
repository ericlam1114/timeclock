import React from "react";
import { useState } from "react";
import MyTable from "./MyTable";
import "./MyHours.css";
import { Button } from 'reactstrap';
// import { Button } from "react-bootstrap";

const MyHours = () => {
  // const initDate = null;
  const [clockInTime, setClockInTime] = useState("");
  const [clockOutTime, setClockOutTime] = useState("");
  // const [timeDisplay, setTimeDisplay] = useState("");
  const [newDay, setNewDay] = useState("");

  const clockIn = (event) => {
    event.preventDefault();
    let initDate = new Date();

    let clockInString = initDate.toLocaleTimeString([], { timeStyle: "short" });

    setClockInTime(clockInString);
    console.log(clockInString);
    const newDay = new Date();
    let today = newDay.getDay();
    if (today === 1) {
      setNewDay("Monday");
    } else if (today === 2) {
      setNewDay("Tuesday");
    } else if (today === 3) {
      setNewDay("Wednesday");
    } else if (today === 4) {
      setNewDay("Thursday");
    } else if (today === 5) {
      setNewDay("Friday");
    } else if (today === 6) {
      setNewDay("Saturday");
    } else if (today === 0) {
      setNewDay("Sunday");
    }
    // console.log(today);
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
    } else {
      console.log("you worked these hours", clockInTime, clockOutTime);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        
          <div >
            <p>You Clocked In At {clockInTime}</p>
            <Button  color="primary" onClick={clockIn} value={clockInTime}>
              Clock In
            </Button>
            <p>You Clocked Out At {clockOutTime}</p>
            <Button  color="primary" onClick={clockOut} value={clockOutTime}>
              Clock Out
            </Button>
          </div>
          <h3></h3>
        
      </form>
      <MyTable clockIn={clockInTime} clockOut={clockOutTime} day={newDay} />
      <input  className="buttonEdit" type="submit" value="Submit" />
    </div>
  );
};

export default MyHours;
