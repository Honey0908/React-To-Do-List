import React from 'react'
import DateHeader from '../../Components/DateHeader/DateHeader'
import Todos from '../../Components/Todos/Todos'
import styles from './ToDoList.module.css'
import AddTodo from '../../Components/Addtodo/AddTodo'


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
