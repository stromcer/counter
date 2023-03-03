import React from "react";

const Alarma = ({onAlarmButton, active}) =>{
    return(
        <div className="bg-black text-white p-2 d-flex flex-direction-row justify-content-center">
            <input type="number" className="form-input  mx-2" title="Alarm target (in seconds)"/>
            <button className={`btn ${active ? `btn-success`: `btn-dark`} mx-2`} onClick={onAlarmButton} title="Set / Unset alarm"> Set alarm</button>
        </div>
    )
}


export default Alarma;