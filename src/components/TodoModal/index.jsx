import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TodoModalStyle from './style';
import Form from '../Form';

export default function TodoModal({ hideModal, handleTitle, id }) {
    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: yup.object({
            title: yup.string().required('Você deve preencher com uma tarefa.')
        }),
        onSubmit: (values, formikBag) => {
            handleTitle(id, values.title);
            formikBag.setFieldValue('title', '', false);
        }
    });

    return (
        <TodoModalStyle>
            <h1>Modal</h1>
            <button onClick={hideModal}>Fechar</button>
            <Form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Novo título'
                    autoComplete='off'
                    className='input'
                    {...getFieldProps('title')}
                />
                {errors.title ? (
                    <small className='msg-erro'>{errors.title}</small>
                ) : null}
                <button type='submit' className='btn'>Atualizar tarefa</button>
            </Form>
        </TodoModalStyle>
    );
}