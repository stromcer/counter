import React from "react";

const Alarma = ({onChange,value,onAlarmButton}) =>{
    return(
        <div className="bg-black text-white p-2 d-flex flex-direction-row justify-content-center">
            <input type="number" className="form-input  mx-2" value={value} onChange={onChange} />
            <button className="btn btn-dark mx-2" onClick={onAlarmButton}> Set alarm</button>
        </div>
    )
}


export default Alarma;