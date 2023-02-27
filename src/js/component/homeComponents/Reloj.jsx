import React, {useState, useEffect} from "react";
import CounterScreen from "./RelojComponents/CounterScreen.jsx"






let totalSeconds = 0;


const Clock = ({timerWork}) => {

    let [firstDigit, setFirstDigit] = useState(0);
    let [secondDigit, setSecondDigit] = useState(0);
    let [thirdDigit, setThirdDigit] = useState(0);
    let [fourthDigit, setFourthDigit] = useState(0);
    let [fithDigit, setFithDigit] = useState(0);
    let [sixDigit, setSixDigit] = useState(0);


    
    useEffect(()=>{
        let SumSeconds = setInterval(()=>{
            clearInterval(SumSeconds);

            if(!timerWork){
                return
            }

            totalSeconds++

            setFirstDigit((totalSeconds%10))
            setSecondDigit(Math.floor((totalSeconds%100)/10))
            setThirdDigit(Math.floor((totalSeconds%1000)/100))
            setFourthDigit(Math.floor((totalSeconds%10000)/1000))
            setFithDigit(Math.floor((totalSeconds%100000)/10000))
            setSixDigit(Math.floor((totalSeconds%1000000)/100000))

        },1000)}
    ,[firstDigit])



	return (
		<>
			<div className="clock container-fluid d-flex d-row bg-black justify-content-center text-center text-white">
                <div className="h1 bg-dark rounded-1 m-2 p-1"><i className="fas fa-clock"></i></div>

                <CounterScreen number={sixDigit} />
                <CounterScreen number={fithDigit} />
                <CounterScreen number={fourthDigit} />
                <CounterScreen number={thirdDigit} />
                <CounterScreen number={secondDigit} />
                <CounterScreen number={firstDigit} />
            </div>

		</>
	);
};


export default Clock;