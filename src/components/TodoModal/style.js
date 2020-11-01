import styled from 'styled-components';

const TodoModalStyle = styled.div `
    .backdrop {
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .modal-content {
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
        -webkit-animation-name: slideIn;
        -webkit-animation-duration: 0.4s;
        animation-name: slideIn;
        animation-duration: 0.4s;

        @-webkit-keyframes slideIn {
            from {top: -300px; opacity: 0} 
            to {top: calc(50% - 200px); opacity: 1}
        }

        @keyframes slideIn {
            from {top: -300px; opacity: 0}
            to {top: calc(50% - 200px); opacity: 1}
        }
    }

    form {
        margin: 10px 80px;
    }

    .btn-close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        background-color: #FFF0;
        color: #ECEFF4;
        border: none;
        cursor: pointer;
        outline: none;
    }

    @media only screen and (max-width: 800px) {
        .modal-content {
            left: 0;
            width: 95%;
            text-align: center;
            margin: 10px;
        }

        form {
            margin: 10px 10px;
        }
    }
`;

export default TodoModalStyle;