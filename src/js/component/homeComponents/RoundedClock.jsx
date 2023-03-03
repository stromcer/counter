import React from "react";


const RoundedClock = ({seconds, onSyncButton}) => {

    let secondsToRotation = seconds*6;
    let minutes = Math.floor(seconds/60);
    let minutesToRotation = (minutes*6)-180;
    let hours = Math.floor(minutes/60);
    let hoursToRotation = (hours*30)-180;

    let secondsRotation = {
        transform: `rotateZ(${secondsToRotation}deg)`,
    }

    let minutesRotation = {
        transform: `rotateZ(${minutesToRotation}deg)`,
    }

    let hoursRotation = {
        transform: `translateX(-50%)  rotateZ(${hoursToRotation}deg) `,
    }


    return(
        <div className="bg-black p-2">
            <div className="RoundedClockBody">
                <div className="RoundedClockTimers">
                    <div className="RoundedClockHandSeconds" style={secondsRotation}></div>
                    <div className="RoundedClockHandMinutes" style={minutesRotation}></div>
                    <div className="RoundedClockHandHours" style={hoursRotation}></div>
                </div>
                <div className="text-center mt-5">
                   <button className="btn btn-dark" onClick={onSyncButton} title="¡Sync the clock with your local time!">Sync NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default RoundedClock;