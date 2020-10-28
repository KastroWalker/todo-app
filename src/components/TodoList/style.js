import styled from 'styled-components';

const TodoListStyle = styled.main`
    grid-area: main;
    background-color: #3B4252;
    color: #ECEFF4;
    overflow-y: scroll;

    .list-todo {
        list-style: none;
        display: grid;
        gap: 20px;
    }
`

export default TodoListStyle;