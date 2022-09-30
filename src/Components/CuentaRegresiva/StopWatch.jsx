import React, { useEffect, useRef, useState } from "react";
import "./StopWatch.css";

function StopWatch() {

  const [timeDay, setTimeDay] = useState("00");
  const [timeHour, setTimeHour] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  const starTimer = () => {
    const countdownDate = new Date('oct 20 2022 09:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeDay(days);
        setTimeHour(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }

    }, 1000)
  };

  useEffect(() => {
    starTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <section className="cuenta-regresiva">
      <div className="countdown">

        <div className="countdown-days">
          <span className="dayNum">
            <div>{timeDay}</div>
          </span>
          <span className="dayName">Dias</span>
        </div>

        <div className="countdown-hours">
          <span className="dayNum">
            <div>{timeHour}</div>
          </span>
          <span className="dayName">Horas</span>
        </div>

        <div className="countdown-minutes">
          <span className="dayNum">
            <div>{timeMinutes}</div>
          </span>
          <span className="dayName">Minutos</span>
        </div>

        <div className="countdown-seconds">
          <span className="dayNum">
            <div>{timeSeconds}</div>
          </span>
          <span className="dayName">Segundos</span>
        </div>

      </div>
    </section>
  );
}

export default StopWatch;

