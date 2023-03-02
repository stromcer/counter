import React from "react";

const Alerta = ({activo,onResetCounter})=>{
    let alertBoxClass = "alertBox"
    if(!activo){
        alertBoxClass+= " d-none"
    } 

    return(<>
        <div className={alertBoxClass}>
            <div className="bg-danger d-flex text-center align-items-center rounded">
                <div>
                    <h1>ATENCION HAS LLEGADO AL TIEMPO INDICADO</h1>
                    <button onClick={onResetCounter} className="btn btn-success">Reiniciar</button>
                </div>
            </div>
        </div>
    </>)
}

export default Alerta;