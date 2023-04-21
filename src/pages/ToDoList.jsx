import React from 'react'
import DateHeader from '../Components/DateHeader'
import Todos from '../Components/Todos'
import styles from '../css/ToDoList.module.css'
import AddTodo from '../Components/AddTodo'


function ToDoList() {
  return (
    <div id={styles.main_container}>
        <DateHeader/>
        <Todos/>
        <AddTodo/>
    </div>
  )
}

export default ToDoList
