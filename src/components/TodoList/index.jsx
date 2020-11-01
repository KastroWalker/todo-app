import React, { useCallback, useContext, useState } from 'react';
import FilterContext from '../../state/filter/Context';
import * as todosActions from '../../state/todos/actions';
import TodosContext from '../../state/todos/Context';
import TodoItem from '../TodoItem';
import TodoModal from '../TodoModal';
import TodoListStyle from './style';

function filteredList(list, filter) {
    switch (filter) {
        case 'all':
            return list;
        case 'active':
            return list.filter((item) => {
                return item.completed === false
            });
        case 'completed':
            return list.filter((item) => {
                return item.completed === true
            });
        default:
            throw new Error();
    }
}

export default function TodoList() {
    const { filter } = useContext(FilterContext);

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

    const getTitle = useCallback((id) => {
        const currentTodo = todos.find((todo) => {
            return todo.id === id
        });
        return currentTodo.title;
    }, [todos]);

    return (
        <TodoListStyle>
            <ul className="list-todo">
                {filteredList(todos, filter).map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        showModal={() => { showModal(todo.id) }}
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
                getTitle={getTitle}
            />}
        </TodoListStyle>
    );
}