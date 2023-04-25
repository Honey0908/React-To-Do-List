import React from 'react'
import styles from './NoTask.module.css'
import completeTask from '../../assets/completeTask.png'


function NoTask() {
    return (

        <div className={styles.noTaskDiv}>
            <h2 className={styles.noTaskHeading}>No Task for Today</h2>
            <img src={completeTask} alt="" height="250px" />
        </div>

    )
}

export default NoTask
