import React, {useState, useEffect} from "react";
import CounterScreen from "./RelojComponents/CounterScreen.jsx"








const Clock = ({seconds}) => {


	return (
		<>
			<div className="clock container-fluid d-flex d-row bg-black justify-content-center text-center text-white">
                <div className="h1 bg-dark rounded-1 m-2 p-1"><i className="fas fa-clock"></i></div>

                <CounterScreen number={Math.floor((seconds%1000000)/100000)} />
                <CounterScreen number={Math.floor((seconds%100000)/10000)} />
                <CounterScreen number={Math.floor((seconds%10000)/1000)} />
                <CounterScreen number={Math.floor((seconds%1000)/100)} />
                <CounterScreen number={Math.floor((seconds%100)/10)} />
                <CounterScreen number={(seconds%10)} />
            </div>

		</>
	);
};


export default Clock;