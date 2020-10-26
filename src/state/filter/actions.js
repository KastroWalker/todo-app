import * as filterTypes from './types';

export default function toogleFilter(filter) {
    return {
        types: filterTypes.TOOGLE_FILTER,
        payload: {
            filter: filter
        }
    }
}