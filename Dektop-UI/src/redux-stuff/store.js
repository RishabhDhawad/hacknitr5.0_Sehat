import { createStore, combineReducers } from 'redux';
import {formReducer, shareReducer} from './reducer.js';

const rootReducer = combineReducers({
    form: formReducer,
    data: shareReducer
});

const store = createStore(rootReducer);

export default store;