import React, { useState } from 'react'
import styles from './Todos.module.css'
import Todo from '../Todo/Todo'

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
          <Todo key={todo.id} todo={todo} handleChange={handleChange}/>
        )
      })
      }
    </div>
  )
}

export default Todos
