import React from 'react'
import {useState, useEffect} from 'react'

function Api() {
    // const [timer, setTimer] = useState({})

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/mckamey/countdownjs/master/countdown.js')
    //         .then(res => {
    //             res.json()
    //             console.log(res)
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }, [])

  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(30);
  const [hours, setHours] = useState(5);
  const [days, setDays] = useState(29);
  const [timeDone, setDone] = useState(false);
 //SECONDS

  //seconds 60 -> 0
  useEffect(() => {
    const secondsCounter =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(secondsCounter);
  }, [seconds]);

  //seconds == 60 (when seconds == 0)
  useEffect(() => {
    return () => setSeconds(2);
  }, [seconds == 0 && !timeDone ]);

//MINUTES

  //Minutes 60 -> 0  (when seconds == 0)
  useEffect(() => {
    return () => setMinutes(minutes-1)
  }, [seconds == 0]);

  //Minutes == 60 (when minutes == 0)
  useEffect(() => {
    return () => setMinutes(2);
  }, [minutes == 0 && !timeDone]);

  //HOURS

  //hours 24 => 0 (when minutes == 0)
  useEffect(() => {
    return () => setHours(hours - 1);
  }, [minutes == 0]);

  //hours == 23 (when hours == 0)
  useEffect(() => {
    return () => setHours(2);
  }, [hours == 0 && !timeDone]);

//DAYS
  //days 5 => 0 (when hours == 0)
  useEffect(() => {
      return () => setDays(days-1);
  }, [hours == 0 && !timeDone])

//DONE

  useEffect(() => {
      return () => setDone(true)
  }, [days == 0 && hours == 0 && minutes == 0 && seconds == 0])




    return (
        <div>
            <h1>
            countdown: {days} : {hours} : {minutes} : {seconds}
            </h1>
            
            <h1>Work In Progress</h1>
            Timer is Displaying here
            <span>
            <input type="number" value="1990" size="4" placeholder="year"></input>-/- 
            <input type="number" value="9" size="2" placeholder="month"></input>-/- 
            <input type="number" value="2" size="2" placeholder="day"></input>-/- 
            </span>

        </div>
    )
}

export default Api
