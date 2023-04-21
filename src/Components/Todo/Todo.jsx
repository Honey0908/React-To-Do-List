import React from 'react'
import checkedImg from '../../assets/checked.png'
import unCheckedImg from '../../assets/unchecked.png'
import styles from './Todo.module.css'

function Todo({todo,handleChange}) {
  return (
    <div>
        <p className={styles.todoText} key={todo.id}>
            <span className={todo.complete ? "font_secondary" :""}>{todo.task}</span>
            <img className={styles.todoImage}
            src={todo.complete ? checkedImg : unCheckedImg}
            alt={todo.complete ? "Checked" : "Unchecked"}
            onClick={() => handleChange(todo.id)}
          />
          </p>
    </div>
  )
}

export default Todo
