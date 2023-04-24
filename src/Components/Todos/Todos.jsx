import React, { useContext, useState } from 'react'
import styles from './Todos.module.css'
import Todo from '../Todo/Todo'
import { TodoContext } from '../../store/TodoContext'
import NoTask from '../NoTask.jsx/NoTask'

function Todos() {

  const InitialTodos = [
    { task: "Buy Ice Cream", complete: false, id: 1 },
    { task: "Do not fall asleep", complete: false, id: 2 },
    { task: "read an article", complete: true, id: 3 },
    { task: "bring flowers", complete: false, id: 4 },

  ]

  const { todos, toggleTodo } = useContext(TodoContext);

  // const [todos, setTodo] = useState(InitialTodos)

  const handleChange = (todoId) => {
    toggleTodo(todoId);
  }

  const completedTasks = todos.filter((todo) => todo.completed)
  const unCompletedTasks = todos.filter((todo) => !todo.completed)

  return (

    <div className={styles.todo_area}>


      {todos.length > 0 ? (
        <>


          {completedTasks.map(todo => (
            <Todo key={todo.id} todo={todo} handleChange={handleChange} />
          ))}

          {unCompletedTasks.map(todo => (
            <Todo key={todo.id} todo={todo} handleChange={handleChange} />
          ))}

        </>
      ) : (
        <NoTask />
      )}



    </div>
  )
}

export default Todos