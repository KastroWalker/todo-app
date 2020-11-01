import * as filterTypes from './types';

export default function reducer(_, action) {
    switch (action.type) {
        case filterTypes.TOOGLE_FILTER:
            console.log('here: ' + action.payload)
            return action.payload.filter;
        default:
            throw new Error();
    }
}