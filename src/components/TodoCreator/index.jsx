import { useFormik } from 'formik';
import React, { useContext, useEffect, useRef } from 'react';
import * as yup from 'yup';
import * as todosActions from '../../state/todos/actions';
import TodosContext from '../../state/todos/Context';
import TodoCreatorStyle from './style';
import Form from '../Form';

export default function TodoCreate() {
    const inputTitle = useRef(null);

    const { dispatchToTodos } = useContext(TodosContext);

    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: yup.object({
            title: yup.string().required('Você deve preencher com uma tarefa.')
        }),
        onSubmit: (values, formikBag) => {
            dispatchToTodos(todosActions.addTodo(values.title));
            formikBag.setFieldValue('title', '', false);
        }
    });

    useEffect(() => {
        inputTitle.current.focus();
    }, []);

    return (
        <TodoCreatorStyle>
            <Form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Nova tarefa'
                    autoComplete='off'
                    className='input'
                    ref={inputTitle}
                    {...getFieldProps('title')}
                />
                {errors.title ? (
                    <small className='msg-erro'>{errors.title}</small>
                ) : null}
                <button type='submit' className='btn'>Adicionar tarefa</button>
            </Form>
        </TodoCreatorStyle>
    );
}