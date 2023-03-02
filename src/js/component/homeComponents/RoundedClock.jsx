import React from "react";


const RoundedClock = ({seconds}) => {

    let secondsToRotation = (seconds%60)*6
    let minutes = Math.floor(seconds/60);
    let minutesToRotation = (minutes*6)-180

    let secondsRotation = {
        transform: `rotateZ(${secondsToRotation}deg)`,
    }

    let minutesRotation = {
        transform: `rotateZ(${minutesToRotation}deg)`,
    }
    


    return(
        <div className="bg-black p-2">
            <div className="RoundedClockBody">
                <div className="RoundedClockTimers">
                    <div className="RoundedClockHandSeconds" style={secondsRotation}></div>
                    <div className="RoundedClockHandMinutes" style={minutesRotation}></div>
                </div>
            </div>
        </div>
    )
}

export default RoundedClock;