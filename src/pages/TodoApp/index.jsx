import React from 'react';
import TodoCreator from './containers/TodoCreator';

export default function TodoApp() {
    return (
        <>
            <TodoCreator mode='dark' />
            <main>TodoList</main>
            <footer>TodoFilter</footer>
        </>
    );
}