import React from 'react';
import TodoCreator from '../../components/TodoCreator';
import TodoList from '../../components/TodoList';

export default function TodoApp() {
    return (
        <>
            <TodoCreator />
            <TodoList />
            <footer style={{ textAlign: "center", backgroundColor: "#2D3340", color: "#FFF", height: "50px"}}>TodoFilter</footer>
        </>
    );
}