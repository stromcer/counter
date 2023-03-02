import React,{useState, useEffect} from "react";
import Clock from "./homeComponents/Reloj.jsx"
import Controles from "./homeComponents/Controles.jsx"
import MarchaAtras from "./homeComponents/MarchaAtras.jsx";
import Alarma from "./homeComponents/Alarma.jsx";
import Alerta from "./homeComponents/Alerta.jsx"


//create your first component


const Home = () => {
	let [timerWork, setTimerWork] = useState(true)
	let [totalSeconds, setTotalSeconds] = useState(0)
	let [backwardCount, setBackwardCount] = useState(false)
	let [backwardsTarget, setBackwardsTarget] = useState(0)
	let [alarmTarget, setAlarmTarget] = useState(0)
	let [alarm, setAlarm] = useState(false)


	//   HANDLERS 

	const handlePauseButton = () => {
		setTimerWork((prevState)=> !prevState)
	}

	const handleResetButton = () => {
		setBackwardCount(false)
		setAlarm(false)
		setAlarmTarget(0)
		setTotalSeconds(0)
		setTimeout(()=>{
			setTotalSeconds(0)
		},500)

	}

	const handleAlarmButton = () => {
		setAlarm(true)
	}


	const handleBackwardsButton = () => {
		setTotalSeconds((prevState) => backwardsTarget)
		setBackwardCount((prevState) => !prevState)
	}

	//   END  HANDLERS	END


	
	useEffect(()=>{
		let clock = setInterval(()=>{
			clearInterval(clock)
			if(!timerWork){
				return 
			}
			if(alarm && totalSeconds == alarmTarget){
				setTimerWork((prevState) => !prevState)
				return
			}
			if(backwardCount){
				setTotalSeconds((lastState) => lastState-1)
				return 
			}		
			setTotalSeconds((lastState) => lastState+1)
		},1000)},
		[totalSeconds])

	useEffect(()=>{
		
	},[timerWork])


	return (
		<>
		<Clock seconds={totalSeconds}/>
		<Controles working={timerWork} onResetCounter={handleResetButton} onPauseCounter={handlePauseButton} />
		<MarchaAtras onBackwardsCount={handleBackwardsButton} value={backwardsTarget} onChange={e => setBackwardsTarget(e.target.value)} />
		<Alarma  onChange={e => setAlarmTarget(e.target.value)} onAlarmButton={handleAlarmButton}  value={alarmTarget} />
		<Alerta activo={alarm && totalSeconds == alarmTarget} onResetCounter={handleResetButton} />
		</>
	);
};

export default Home;
