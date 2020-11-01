import * as filterTypes from './types';

export function toogleFilter(filter) {
    return {
        type: filterTypes.TOOGLE_FILTER,
        payload: {
            filter: filter
        }
    }
}