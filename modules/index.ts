import { combineReducers } from 'redux';
import counter from '@/modules/counter/reducer.ts';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
