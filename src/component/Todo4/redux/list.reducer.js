const INITIAL_STATE = {
    list: [
        {done: false, id: 1593421396484, name: "Demo1"},
        {done: false, id: 1593421398837, name: "Demo2"}
    ]
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LIST':
            // return {
            //     ...state,
            //     list: action.payload
            // }
            console.log('list created', action.list);
            return state;

        case 'SET_LIST_ERROR':
            // return {
            //     ...state
            // }
            console.log('error', action.err);
            return state;

        default:
            return state;
    }
}

export default listReducer;