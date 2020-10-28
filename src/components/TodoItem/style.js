import styled from 'styled-components';

const TodoItemStyle = styled.li `
    text-decoration: ${props => props.status ? 'line-through' : 'none'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    padding: 10px;
    border: 3px solid #FFF;
    border-radius: 15px;

    .btn-delete, .btn-edit {
        background-color: #FFF0;
        color: #FFF;
        border: none;
        font-size: 25px;
        cursor: pointer;

        :hover {
            color: #DDD;
        }
    }

    .status {
        width: 40px;
        height: 20px;
        position: relative;
        border-radius: 10px;
        background-color: #FFF;
        box-shadow: inset 0px 0px 4px 2px #DDD;
        appearance: none;
        cursor: pointer;
        outline: none;

        :checked {
            background-color: #CCC;
            box-shadow: inset 0px 0px 4px 2px #AAA;
            
            ::before {
                left: 20px;
            }
        }

        ::before {
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 50%;
            background-color: #AAA;
            box-shadow: inset 0px 0px 4px 2px #777;
            transform: scale(1.1);
            transition: all 400ms;
        }
    }
`;

export default TodoItemStyle;