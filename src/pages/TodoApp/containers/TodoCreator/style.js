import styled from 'styled-components';

const colors = {
    bgDark: '#2D3340',
    bgLight: '#2D3340',
    inputDark: {
        bg: '#3B4252',
        color: '#ECEFF4'
    },
    inputLight: {
        bg: '#3B4252',
        color: '#ECEFF4'
    },
    msgDark: '#BF616A',
    msgLight: '#BF616A',
    submitDark: {
        bg: '#00929D',
        color: '#ECEFF4',
        hover: '#326881'
    },
    submitLight: {
        bg: '#00929D',
        color: '#ECEFF4',
        hover: '#326881'
    },
}

const TodoCreatorStyle = styled.header `
    background-color: ${props => props.mode === 'dark' ? colors.bgDark : colors.bgLight};
    width: 100%;
    height: 200px;
    top: 0px;
    left: 0px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    .form-new-task {
        display: flex;
        flex-direction: column;
        flex-basis: 25%;
        text-align: center;
    }

    .input-new-task {
        background-color: ${
            props => { 
                return props.mode === 'dark' ? 
                    colors.inputDark.bg : 
                    colors.inputLight.bg
            }
        };
        color: ${
            props => { 
                return props.mode === 'dark' ? 
                    colors.inputDark.color:
                    colors.inputLight.color
            }
        };
        outline: none;
        border: none;
        font-size: 25px;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

    .msg-erro {
        color: #BF616A;
        margin-bottom: 5px;
        font-size: 16px;
    }
    
    .btn-new-task {
        margin: 5px;
        background-color: ${
            props => { 
                return props.mode === 'dark' ? 
                    colors.submitDark.bg:
                    colors.submitLight.bg
            }
        };
        color: ${
            props => { 
                return props.mode === 'dark' ? 
                    colors.submitDark.color:
                    colors.submitLight.color
            }
        };
        cursor: pointer;
        border: none;
        font-size: 25px;
        border-radius: 5px;
        padding: 5px;
        outline: none;
    }
    
    .btn-new-task:hover {
        background-color: #326881;
    }
`;

export default TodoCreatorStyle;