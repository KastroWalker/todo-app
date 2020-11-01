import { useFormik } from 'formik';
import React from 'react';
import { MdClose } from 'react-icons/md';
import * as yup from 'yup';
import Form from '../Form';
import TodoModalStyle from './style';

export default function TodoModal({ hideModal, handleTitle, getTitle, id }) {
    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: getTitle(id),
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
            <div className="backdrop" onClick={hideModal}></div>
            <div className="modal-content">
                <h1>Modal</h1>
                <button onClick={hideModal} className='btn-close'><MdClose /></button>
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
            </div>
        </TodoModalStyle>
    );
}