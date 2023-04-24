import React from 'react'
import styles from './NoTask.module.css'


function NoTask() {
    return (

        <div className={styles.noTaskDiv}>
            <h2 className={styles.noTaskHeading}>Done for Today</h2>
            <img src="src/assets/completeTaks.png" alt="" height="250px" />
        </div>

    )
}

export default NoTask
