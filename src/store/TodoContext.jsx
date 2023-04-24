import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer from './reducer';
import { addTodo, removeTodo, toggleTodo } from './actions';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });


    const setExpiration = () => {
        const expiration = new Date();
        expiration.setHours(23, 59, 59, 999);
        localStorage.setItem('expiration', expiration.getTime());
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


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