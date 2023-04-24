import React, { Component } from 'react'
import styles from './AddTodo.module.css'

class AddTodo extends Component {
    render(){
        return (
          <>
            <button className={styles.addBtn}>&#x2b;</button>  
          </>
        )
    }
}

export default AddTodo
