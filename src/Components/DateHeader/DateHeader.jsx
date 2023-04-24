import React, { useState, useEffect } from 'react';
import styles from './DateHeader.module.css'



function DateHeader() {
  
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');


  useEffect(() => {
    const date = new Date();
    setDay(date.getDate().toString().padStart(2, '0'));
    setYear(date.getFullYear());
    setMonth(date.toLocaleDateString('en-US', { month: 'short' }));
    setDayOfWeek(date.toLocaleDateString('en-US', { weekday: 'long' }));
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.inner_div_for_date +` d-flex`}>
        <h1>{day}</h1>
        <div>
          <div className='fw-600 pb-2'>{month.toUpperCase()}</div>
          <div>{year}</div>
        </div>
      </div>
      <div>
        <h3 className="fw-600"> {dayOfWeek.toUpperCase()}</h3>
      </div>
    </div>
  );
}

export default DateHeader;