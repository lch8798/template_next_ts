import type {
  CombinedState,
  AnyAction,
  ThunkAction,
  Action,
  Reducer,
} from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "@modules/counter";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
type ReducerStates = any;

export const rootReducer = (
  state: ReducerStates,
  action: AnyAction
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

const store = configureStore({
  reducer: rootReducer as Reducer<CombinedState<ReducerStates>, AnyAction>,
  devTools: process.env.NODE_ENV === "development",
  enhancers: [],
});

const makeStore = () => {
  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
