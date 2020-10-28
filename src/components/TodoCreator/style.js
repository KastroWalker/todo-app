import styled from 'styled-components';

const colors = {
    bg: '#2D3340'
}

const TodoCreatorStyle = styled.header `
    background-color: ${colors.bg};
    width: 100%;
    height: 200px;
    top: 0px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    grid-area: header;
`;

export default TodoCreatorStyle;