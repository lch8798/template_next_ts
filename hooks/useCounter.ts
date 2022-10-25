import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules/index";
import { CounterState, increment, decrement } from "@modules/counter/index";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export default function useCounter() {
  const state: CounterState = useSelector<RootState, CounterState>(
    (state: RootState) => state.counter
  );
  const dispatch = useDispatch<ThunkDispatch<CounterState, AnyAction, any>>();

  return {
    state,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}
