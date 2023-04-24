import React, { useContext, useRef, useState } from 'react'
import styles from './AddTodo.module.css'
import { TodoContext } from '../../store/TodoContext'

function AddTodo() {
  const [toggleAddButton, settoggleAddButton] = useState(false);

  const newTodo = useRef('');
  const { addTodo } = useContext(TodoContext);


  const handleNewTodoKeyDown = (event) => {

    if (event.key === 'Enter') {
      if (newTodo.current.value === '') {
        newTodo.current.reportValidity();
        return;
      }

      addTodo({ task: newTodo.current.value, completed: false, id: Math.floor(Math.random() * 1000) });

      newTodo.current.value = ""

      handleToggle();
      return;
    }
    if (event.key === 'Escape') {
      handleToggle()
    }




  }


  const handleToggle = () => {
    settoggleAddButton(!toggleAddButton)
  }


  return (
    <>
      {toggleAddButton ? (
        <>
          <input
            type="text"
            className={styles.addInput}
            ref={newTodo}
            onKeyDown={handleNewTodoKeyDown}
            placeholder="Add Todo task"
            autoFocus
            required
            maxLength="28"
          />
        </>
      ) : (
        <button className={styles.addBtn} onClick={handleToggle}>
          &#x2b;
        </button>
      )}
    </>
  )

}

export default AddTodo