import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as filterActions from '../../state/filter/actions';
import FilterContext from '../../state/filter/Context';
import TodoFooterStyle from './style';

export default function TodoFooter() {
    const { filter, dispatchToFilter } = useContext(FilterContext);
    const [selectValue, setSelectValue] = useState(filter);

    const options = [
        { value: 'all', title: 'Todas as tarefas' },
        { value: 'active', title: 'Tarefas a se fazer' },
        { value: 'completed', title: 'Tarefas realizadas' }
    ];

    const handleSelectValue = useCallback((evt) => {
        setSelectValue(evt.target.value);
    }, [setSelectValue])

    const handleFilter = useCallback((filter) => {
        dispatchToFilter(filterActions.toogleFilter(filter));
    }, [dispatchToFilter]);

    useEffect(() => {
        handleFilter(selectValue)
    }, [handleFilter, selectValue]);

    return (
        <TodoFooterStyle>
            <select value={selectValue} onChange={handleSelectValue} className="select-filter">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                ))}
            </select>
        </TodoFooterStyle>
    );
}