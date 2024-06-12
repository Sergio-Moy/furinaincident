// src/Countdown.js
import React, { useState, useEffect } from 'react';
import { toDate, zonedTimeToUtc, formatInTimeZone } from 'date-fns-tz';
import { differenceInMilliseconds } from 'date-fns';

const Countdown = ({ targetDate, targetTimezone }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const zonedTargetDate = toDate(targetDate, { timeZone: targetTimezone });
    const difference = differenceInMilliseconds(zonedTargetDate, now);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>The Furina Incident has already happened</span>}
    </div>
  );
};

export default Countdown;
