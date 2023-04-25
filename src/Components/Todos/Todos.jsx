import React, { useContext, useState } from 'react'
import styles from './Todos.module.css'
import Todo from '../Todo/Todo'
import { TodoContext } from '../../store/TodoContext'
import NoTask from '../NoTask.jsx/NoTask'

function Todos() {


  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  const handleToggleImage = (todoId) => {
    toggleTodo(todoId);
  }

  const handleRemove = (todoId) => {
    removeTodo(todoId)
  }

  // completed Tasks are checked tasks
  const completedTasks = todos.filter((todo) => todo.completed)

  // uncompleted tasks are unchecked tasks
  const unCompletedTasks = todos.filter((todo) => !todo.completed)

  return (

    <div className={styles.todo_area}>


      {todos.length > 0 ? (
        <>

          {completedTasks.map(todo => (
            <Todo key={todo.id} todo={todo} handleToggleImage={handleToggleImage} removeTodo={handleRemove} />
          ))}

          {unCompletedTasks.map(todo => (
            <Todo key={todo.id} todo={todo} handleToggleImage={handleToggleImage} removeTodo={handleRemove} />
          ))}

        </>
      ) : (

        <NoTask />

      )}



    </div>
  )
}

export default Todos