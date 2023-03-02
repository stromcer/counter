import React from "react";


const Controles = ({onResetCounter, onPauseCounter, working}) => {

    return(
        <div className="bg-black text-white d-flex flex-direction-row justify-content-center p-3">
            <button className="btn btn-dark mx-2" onClick={onResetCounter}><i className="fas fa-power-off"></i></button>
            <button className="btn btn-dark mx-2" onClick={onPauseCounter}>
                {working ? <i className="fas fa-play"></i> : <i className="fas fa-pause-circle"></i> }
            </button>
        </div>
    )
}


export default Controles;