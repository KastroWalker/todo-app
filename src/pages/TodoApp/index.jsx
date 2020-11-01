import React from 'react';
import TodoCreator from '../../components/TodoCreator';
import TodoList from '../../components/TodoList';
import TodoFooter from '../../components/TodoFooter';

export default function TodoApp() {
    return (
        <>
            <TodoCreator />
            <TodoList />
            <TodoFooter />
        </>
    );
}