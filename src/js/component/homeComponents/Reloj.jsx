import React, {useState} from "react";
import CounterScreen from "./RelojComponents/CounterScreen.jsx"








const Clock = () => {
    let [firstDigit, setFirstDigit] = useState(0);
    let [secondDigit, setSecondDigit] = useState(0);
    let [thirdDigit, setThirdDigit] = useState(0);
    let [fourthDigit, setFourthDigit] = useState(0);
    let [fithDigit, setFithDigit] = useState(0);
    let [sixDigit, setSixDigit] = useState(0);


    let timerWorking = true;



    let SumSeconds = setInterval(()=>{
        
        let firstSeconds = firstDigit;
        let secondSeconds = secondDigit
        let thirdSeconds = thirdDigit
        let fourthSeconds = fourthDigit
        let fithSeconds = fithDigit
        let sixSeconds = sixDigit

        

        if (!timerWorking){
            return
        }
        firstSeconds++
        if (firstSeconds == 10){
            setFirstDigit(0)
        }
        else{
            setFirstDigit((prev)=> prev +1)
        }
        
        
        if (secondSeconds == 10){
            secondSeconds = 0
            thirdSeconds++
        }
        setSecondDigit(secondSeconds)
        if (thirdSeconds == 10){
            thirdSeconds = 0
            fourthSeconds++
        }
        setThirdDigit(thirdSeconds)
        if (fourthSeconds == 10){
            fourthSeconds = 0
            fithSeconds++
        }
        setFourthDigit(fourthSeconds)
        if (fithSeconds == 10){
            fithSeconds = 0
            sixSeconds++
        }
        setFithDigit(fithSeconds)
        if (sixSeconds == 10){
            sixSeconds = 0
            fourthSeconds++
        }
        setSixDigit(sixSeconds)

        clearInterval(SumSeconds)
        
    },1000)



	return (
		<>
			<div className="container-fluid d-flex d-row bg-black justify-content-center text-white">
                <div className="h1 bg-dark rounded mx-2"><i className="fas fa-clock"></i></div>

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