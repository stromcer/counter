import React from "react";


const RoundedClock = ({seconds}) => {

    let secondsToRotation = (seconds%60)*6

    let rotation = {
        transform: `rotateZ(${secondsToRotation}deg)`,
    }
    


    return(
        <div className="bg-black p-2">
            <div className="RoundedClockBody">
                <div className="RoundedClockTimers">
                    <div className="RoundedClockHand" style={rotation}></div>
                </div>
            </div>
        </div>
    )
}

export default RoundedClock;