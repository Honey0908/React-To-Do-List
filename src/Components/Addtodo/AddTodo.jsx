import React, { useContext, useRef, useState } from 'react'
import styles from './AddTodo.module.css'
import { TodoContext } from '../../store/TodoContext'

/* AddTodo is used to add new Todo task into list */
const AddTodo = () => {

  // addTodo function from global context
  const { addTodo } = useContext(TodoContext);

  // state to toggle add button and input
  const [toggleAddButton, settoggleAddButton] = useState(false);

  const [error, setError] = useState(null)

  // reference to input of add newTodo 
  const newTodo = useRef('');


  /* handle pressed keys on the input */
  const handleNewTodoKeyDown = (event) => {


    /* if user press Enter then Input will be added to the list if it has a value */
    if (event.key === 'Enter') {

      if (newTodo.current.value === '') {
        setError("Please Enter Valid Task")
        return;
      }

      /*passed new todo task to  Global Context add Function */
      addTodo({ task: newTodo.current.value, completed: false, id: Math.floor(Math.random() * 1000) });
      newTodo.current.value = ""
      return;

    }

    if (event.key === 'Escape') {
      handleToggle()
    }

  }

  /* Toggle add button and input */
  const handleToggle = () => {
    settoggleAddButton(!toggleAddButton)
  }

  const handleInputChange = (event) => {
    if (event.target.value) {
      setError(null);
    }
  }



  return (
    <React.Fragment>

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
            onChange={handleInputChange}
          />

          {<div className={styles.errorText}>{error}</div>}

        </>

      ) : (

        <button className={styles.addBtn} onClick={handleToggle}>
          &#x2b;
        </button>

      )}

    </React.Fragment>
  )

}

export default AddTodo