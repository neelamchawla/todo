import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';

import listReducer from './list.reducer';

const rootReducer = combineReducers({
    list: listReducer,
    // firestore: firestoreReducer
});

export default rootReducer;