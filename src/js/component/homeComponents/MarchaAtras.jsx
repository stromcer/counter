import React from "react";


const MarchaAtras = ({onBackwardsCount,  active}) =>{

    
    return(
        <div className="bg-black p-2 d-flex flex-direction-row justify-content-center">
            <input type="number" title="Insert number for customized Countdown" name="backwardNumber" className="form-input mx-2"/>
            <button onClick={onBackwardsCount} title="Clockwise if turned" className={`btn ${active ? `btn-success`: `btn-dark`} mx-2`}> Countdown </button>
        </div>
        )
}

export default MarchaAtras;