import React, { useState } from 'react'
import styles from '../css/Todos.module.css'
import checkedImg from '../assets/checked.png'
import unCheckedImg from '../assets/unchecked.png'

function Todos() {

  const InitialTodos = [
    { task: "Buy Ice Cream", complete: false, id: 1 },
    { task: "Do not fall asleep", complete: false, id: 2 },
    { task: "read an article", complete: true, id: 3 },
    { task: "bring flowers", complete: false, id: 4 },
  
  ]
  const [todos, setTodo] = useState(InitialTodos)


  const handleChange = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete }
      }
      return todo;
    })
    setTodo(updatedTodos)

  }


  return (
    <div className={styles.todo_area}>
      {todos && todos.map((todo) => {
        return (
          <p className={styles.todoText} key={todo.id}>
            <span className={todo.complete ? "font_secondary" :""}>{todo.task}</span>
            <img className={styles.todoImage}
            src={todo.complete ? checkedImg : unCheckedImg}
            alt={todo.complete ? "Checked" : "Unchecked"}
            onClick={() => handleChange(todo.id)}
          />
          </p>
        )
      })}
    </div>
  )
}

export default Todos
