import { useSelector, useDispatch } from 'react-redux';
import { CounterState, increment, decrement } from '@/modules/counter/index';

export default function useCounter() {
    const state: CounterState = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return {
        state,
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
}
