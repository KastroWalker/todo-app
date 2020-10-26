import React, { useReducer } from 'react';
import TodosContext from './Context';
import todosReducer from './reducer';

export default function Provider({ children }) {
    const [todos, dispatchToTodos] = useReducer(todosReducer, 'all');
    return (
        <TodosContext.Provider value={{ todos, dispatchToTodos }}>
            {children}
        </TodosContext.Provider>
    )
}