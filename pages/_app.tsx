import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import withRedux from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootState } from '@/modules/index';

// Ant Design init
import 'antd/dist/antd.css';

const App = ({ Component }) => {
    return <Component />;
};

// Make Redux Store
const configureStore = (initialState: RootState, options: any) => {
    const middlewares = [thunk];
    const enhancer =
        process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
};

export default withRedux(configureStore)(App);
