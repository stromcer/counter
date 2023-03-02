import React from "react";


const MarchaAtras = ({onBackwardsCount}) =>{

    return(
        <div className="bg-black p-2 d-flex flex-direction-row justify-content-center">
            <input type="number" name="backwardNumber" className="form-input mx-2"/>
            <button onClick={onBackwardsCount} className="btn btn-dark mx-2"> Countdown </button>
        </div>
        )
}

export default MarchaAtras;