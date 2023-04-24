import React from 'react'
import checkedImg from '../../assets/checked.png'
import unCheckedImg from '../../assets/unchecked.png'
import styles from './Todo.module.css'

function Todo({todo,handleChange}) {
  
  return (
    <div className={styles.todo}>
        <p className={styles.todoText} key={todo.id}>
            <span className={todo.completed ? "font_secondary" :""}>{todo.task}</span>
            <img className={styles.todoImage}
            src={todo.completed ? checkedImg : unCheckedImg}
            alt={todo.completed ? "Checked" : "Unchecked"}
            onClick={() => handleChange(todo.id)}
          />
          </p>
    </div>
  )
}

export default Todo
