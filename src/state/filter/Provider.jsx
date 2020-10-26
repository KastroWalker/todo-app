import React, { useReducer } from 'react';
import FilterContext from './Context';
import filterReducer from './reducer';

export default function Provider({ children }) {
    const [filter, dispatchToFilter] = useReducer(filterReducer, 'all');
    return (
        <FilterContext.Provider value={{ filter, dispatchToFilter }}>
            {children}
        </FilterContext.Provider>
    )
}