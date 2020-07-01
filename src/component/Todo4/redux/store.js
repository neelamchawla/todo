import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { 
    // reduxFirestore, 
    getFirestore } from 'redux-firestore';
import { 
    // reactReduxFirebase, 
    getFirebase } from 'react-redux-firebase';

// import fbConfig from '../firebase/firebase.utils';
import rootReducer from './root-reducer';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        // reduxFirestore(fbConfig),
        // reactReduxFirebase(fbConfig)
    )
);

export default store;