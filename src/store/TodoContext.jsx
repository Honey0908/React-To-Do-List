import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer from './reducer';
import { addTodo, removeTodo, toggleTodo } from './actions';


export const TodoContext = createContext();


const TodoContextProvider = (props) => {

    // localStorage Todos or emppt array
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });


    // setExpiration to end of the day like 23:59:59 
    const setExpiration = () => {
        const expiration = new Date();
        expiration.setHours(23, 59, 59, 999);
        localStorage.setItem('expiration', expiration.getTime());
    }

    /* if todos are modified then it will set to localstorage */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    /* check every second if todos are expired or not */
    useEffect(() => {

        const interval = setInterval(() => {
            const expiration = localStorage.getItem('expiration');

            if (expiration && Date.now() > parseInt(expiration)) {
                localStorage.clear();
                dispatch({ type: 'REMOVE_ALL_TODOS' });
            }
        }, 1000);

        return () => clearInterval(interval);

    }, []);


    // values which are passed globally
    const contextValues = {
        todos,
        addTodo: (todo) => {
            dispatch(addTodo(todo));
            setExpiration();
        },
        removeTodo: (id) => dispatch(removeTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
    };


    return (
        <TodoContext.Provider value={contextValues}>
            {props.children}
        </TodoContext.Provider>
    );

};

export default TodoContextProvider;