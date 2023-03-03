import React,{useState, useEffect} from "react";

import Clock from "./homeComponents/Reloj.jsx"
import Controles from "./homeComponents/Controles.jsx"
import MarchaAtras from "./homeComponents/MarchaAtras.jsx";
import Alarma from "./homeComponents/Alarma.jsx";
import Alerta from "./homeComponents/Alerta.jsx"
import RoundedClock from "./homeComponents/RoundedClock.jsx";

//create your first component


const Home = () => {
	let [timerWork, setTimerWork] = useState(true)
	let [totalSeconds, setTotalSeconds] = useState(0)
	let [backwardCount, setBackwardCount] = useState(false)
	let [alarmTarget, setAlarmTarget] = useState(0)
	let [alarm, setAlarm] = useState(false)



	//   HANDLERS 

	const handlePauseButton = () => {
		setTimerWork((prevState)=> !prevState)
		clearTimeout(clock)
	}

	const handleResetButton = () => {
		clearTimeout(clock)
		setBackwardCount(false)
		setAlarm(false)
		setAlarmTarget(0)
		setTotalSeconds(0)
	}

	const handleAlarmButton = (e) => {
		let value = e.target.previousSibling.value;
		clearTimeout(clock)
		setAlarm((prevState)=> !prevState)
		setAlarmTarget(value)
		
	}


	const handleBackwardsButton = (e) => {
		let value = Number(e.target.previousSibling.value);


	
		if(totalSeconds == value){
			return
		}

		if(value == 0){
			value = totalSeconds

		}

		clearTimeout(clock)
		setTotalSeconds(value)
		setBackwardCount((prevState) => !prevState)
	}

	const handleSyncButton = () => {
		
		let date = new Date
    	let totalDate = (date.getHours()*60+date.getMinutes())*60+date.getSeconds();
		if(totalSeconds == totalDate){return}
		clearTimeout(clock)
		setTotalSeconds((prevState) => totalDate)
	}
	

	//   END  HANDLERS	END

	
	let clock = setTimeout(()=>{
			
			if(!timerWork){
				return 
			}
			if((alarm && totalSeconds == alarmTarget) || (backwardCount && totalSeconds <= 0)){
				setTimerWork((prevState) => !prevState)
				return
			}
			if(backwardCount){
				setTotalSeconds((lastState) => lastState-1)
				return 
			}		
			setTotalSeconds((lastState) => lastState+1)
		},1000)

	
		
		
	return (
		<>
		<Clock seconds={totalSeconds}/>
		<Controles working={timerWork} onResetCounter={handleResetButton} onPauseCounter={handlePauseButton} />
		<MarchaAtras active={backwardCount} onBackwardsCount={handleBackwardsButton} />
		<Alarma active={alarm} onAlarmButton={handleAlarmButton} />
		<Alerta activo={alarm && totalSeconds == alarmTarget} onResetCounter={handleResetButton} />
		<RoundedClock onSyncButton={handleSyncButton} seconds={totalSeconds}/>
		</>
	);
};

export default Home;
