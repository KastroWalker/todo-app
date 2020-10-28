import React, { useState, useCallback, useEffect } from 'react';
import TodoItemStyle from './style';
import { MdDelete, MdCreate } from 'react-icons/md';

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
            <span>{title}</span>

            <div className='btn-actions'>
                <button onClick={showModal} className="btn-edit"><MdCreate /></button>
                <input
                    type="checkbox"
                    value={isChecked}
                    onChange={handleCheck}
                    className="status"
                />
                <button onClick={handleDelete} className="btn-delete"><MdDelete /></button>
            </div>
        </TodoItemStyle>
    );
}