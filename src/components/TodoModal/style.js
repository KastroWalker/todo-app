import styled from 'styled-components';

const TodoModalStyle = styled.div`
    width: 800px;
    height: 400px;
    margin: auto;
    position: fixed;
    top: calc(50% - 200px);
    left: calc(50% - 400px);
    border-radius: 10px;
    background-color: #2D3340;
    text-align: center;
    z-index: 1;
    color: #ECEFF4;

    form {
        margin: 10px 80px;
    }
`;

export default TodoModalStyle;