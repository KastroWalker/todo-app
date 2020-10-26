import * as filterTypes from './types';

export default function reducer(_, action) {
    switch (action.type) {
        case filterTypes.TOOGLE_FILTER:
            return action.payload.filter;
        default:
            throw new Error();
    }
}