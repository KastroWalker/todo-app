import styled from 'styled-components';

const TodoFooterStyle = styled.footer`
    display: flex;
    background-color: #2D3340;
    color: #FFF; 
    height: 150px;
    justify-content: center;
    align-items: center;
    
    .select-filter {
        flex-basis: 25%;
        font-size: 25px;
        border-radius: 5px;
        padding: 5px;
        background-color: #3B4252;
        color: #ECEFF4;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export default TodoFooterStyle;