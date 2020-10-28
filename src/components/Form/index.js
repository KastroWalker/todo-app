import styled from 'styled-components';

const colors = {
    input: {
        bg: '#3B4252',
        color: '#ECEFF4'
    },
    bgMsg: '#BF616A',
    btnSubmit: {
        bg: '#00929D',
        color: '#ECEFF4',
        hover: '#326881'
    },
}

const Form = styled.form `
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    text-align: center;

    .input {
        background-color: ${colors.input.bg};
        color: ${colors.input.color};
        outline: none;
        border: none;
        font-size: 25px;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

    .msg-erro {
        color: ${colors.bgMsg};
        margin-bottom: 5px;
        font-size: 16px;
    }
    
    .btn {
        margin: 5px;
        background-color: ${colors.btnSubmit.bg};
        color: ${colors.btnSubmit.color};
        cursor: pointer;
        border: none;
        font-size: 25px;
        border-radius: 5px;
        padding: 5px;
        outline: none;

        :hover {
            background-color: #326881;
        }
    }
`;

export default Form;