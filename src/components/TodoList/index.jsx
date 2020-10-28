import React, { useCallback, useContext, useState } from 'react';
import * as todosActions from '../../state/todos/actions';
import TodosContext from '../../state/todos/Context';
import TodoItem from '../TodoItem';
import TodoModal from '../TodoModal';
import TodoListStyle from './style';

export default function TodoList() {
    const [currentId, setCurrentId] = useState(null);

    const { todos, dispatchToTodos } = useContext(TodosContext);

    const showModal = useCallback((id) => {
        setCurrentId(id);
    }, []);

    const hideModal = useCallback(() => {
        setCurrentId(null);
    }, []);

    const handleDelete = useCallback((id) => {
        dispatchToTodos(todosActions.removeTodo(id));
    }, [dispatchToTodos]);

    const handleStatus = useCallback((id, completed) => {
        dispatchToTodos(todosActions.toggleTodoStatus(id, completed));
    }, [dispatchToTodos]);

    const handleTitle = useCallback((id, title) => {
        dispatchToTodos(todosActions.toggleTodoTitle(id, title));
        hideModal();
    }, [dispatchToTodos, hideModal]);

    return (
        <TodoListStyle>
            <ul className="list-todo">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        showModal={() => {showModal(todo.id)}}
                        completed={todo.completed}
                        handleStatus={handleStatus}
                        handleDelete={() => { handleDelete(todo.id) }}
                    />
                ))}
            </ul>
            {currentId && <TodoModal 
                hideModal={hideModal} 
                handleTitle={handleTitle} 
                id={currentId}
            />}
        </TodoListStyle>
    );
}