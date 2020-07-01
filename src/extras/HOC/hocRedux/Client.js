import { createStore } from 'redux';

const reducer = function() {

}

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

