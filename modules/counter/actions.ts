// action types
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

// actions
export const increment = () => (dispatch, getState) => {
    dispatch({ type: INCREMENT });
};

export const decrement = () => (dispatch, getState) => {
    dispatch({ type: DECREMENT });
};
