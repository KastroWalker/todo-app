import React, { useCallback, useEffect, useState } from 'react';
import { MdCreate, MdDelete } from 'react-icons/md';
import TodoItemStyle from './style';

export default function TodoItem({ id, title, completed, handleDelete, handleStatus, showModal }) {
    const [isChecked, setIsChecked] = useState(completed);

    const handleCheck = useCallback((evt) => {
        setIsChecked(evt.target.checked);
    }, [setIsChecked]);

    useEffect(() => {
        handleStatus(id, isChecked);
    }, [handleStatus, isChecked, id]);

    return (
        <TodoItemStyle status={completed}>
            <span className='title'>{title}</span>

            <div className='btn-actions'>
                <button onClick={showModal} className="btn-edit"><MdCreate /></button>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                    className="status"
                />
                <button onClick={handleDelete} className="btn-delete"><MdDelete /></button>
            </div>
        </TodoItemStyle>
    );
}