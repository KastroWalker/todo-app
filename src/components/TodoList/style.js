import styled from 'styled-components';

const TodoListStyle = styled.main `
    grid-area: main;
    background-color: #3B4252;
    color: #ECEFF4;
    overflow-y: scroll;
    
    .list-todo {
        list-style: none;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export default TodoListStyle;