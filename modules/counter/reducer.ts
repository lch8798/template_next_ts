import { AnyAction } from 'redux';
import { CounterState } from './types';
import { INCREMENT, DECREMENT } from './actions';

// default state
const initialState: CounterState = {
    number: 0,
};

// reducers
export default function counter(
    state: CounterState = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}
