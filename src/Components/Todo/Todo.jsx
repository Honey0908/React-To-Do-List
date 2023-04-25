import React, { useState } from 'react'
import checkedImg from '../../assets/checked.png'
import unCheckedImg from '../../assets/unchecked.png'
import styles from './Todo.module.css'


const Todo = ({ todo, handleToggleImage, removeTodo }) => {

  // delete button toggler
  const [toggleDeleteBtn, setToggleDeleteBtn] = useState(false)


  return (

    <div className={styles.todo}>

      <p className={styles.todoText} key={todo.id} onClick={() => setToggleDeleteBtn(!toggleDeleteBtn)}>
        <span className={todo.completed ? "font_secondary" : ""}>{todo.task}</span>

        {toggleDeleteBtn ? (

          <button className={`material-symbols-outlined ${styles.deletebutton}`} onClick={() => removeTodo(todo.id)}>delete</button>

        ) :
          (<img className={styles.todoImage}
            src={todo.completed ? checkedImg : unCheckedImg}
            alt={todo.completed ? "Checked" : "Unchecked"}
            onClick={() => handleToggleImage(todo.id)}
          />)}

      </p>
    </div >

  )
}

export default Todo
