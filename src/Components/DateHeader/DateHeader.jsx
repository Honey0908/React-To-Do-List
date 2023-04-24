import React, { Component } from 'react';
import styles from './DateHeader.module.css';

class DateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      month: '',
      year: '',
      dayOfWeek: '',
    };
  }

  componentDidMount() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

    this.setState({
      day,
      year,
      month,
      dayOfWeek,
    });
  }

  render() {
    const { day, year, month, dayOfWeek } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inner_div_for_date + ` d-flex`}>
          <h1>{day}</h1>
          <div>
            <span className="fw-600">{month.toUpperCase()}</span>
            <span>{year}</span>
          </div>
        </div>
        <div>
          <h3 className="fw-600">{dayOfWeek.toUpperCase()}</h3>
        </div>
      </div>
    );
  }
}

export default DateHeader;