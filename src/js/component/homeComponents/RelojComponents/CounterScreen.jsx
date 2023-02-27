import React from "react";


const CounterScreen = (props) => {
	return (
        <div className="h1 rounded bg-dark mx-2">
            {props.number}
        </div>

	);
};

export default CounterScreen;