import React from "react";


const CounterScreen = (props) => {
	return (
        <div className="h1 rounded-1 bg-dark m-2 p-1">
            {props.number}
        </div>

	);
};

export default CounterScreen;