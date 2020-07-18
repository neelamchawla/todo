// import listReducer from "./list.reducer";

// export const setList = list => ({
//     type: 'SET_LIST',
//     payload: listReducer
// });

export const setList = (list) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('todoList')
        .add({
            ...list,
            done: false,
            id: 123456,
            name: 'testing'
        })
        .then(() => {
            dispatch({
                type: 'SET_LIST',
                list
            });
        })
        .catch((err) => {
            dispatch({
                type: 'SET_LIST_ERROR',
                err
            });
        })

    }
};