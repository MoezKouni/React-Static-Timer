import React from 'react';
import './App.css';

class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.timeFormat = function () {
            return this.hours + ':' + this.minutes + ':' + this.seconds;
        };
    }
}
;

let myTimer = new Time('00', '30', '00');

function Timer() {
  return (
    <div className="countDown">
      {myTimer.timeFormat()}
    </div>
  );
}

export default Timer;