import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './reducer';

const preloadedState = {};

const store = configureStore({
    middleware: [thunk],
    reducer,
    preloadedState
});

export { store };
