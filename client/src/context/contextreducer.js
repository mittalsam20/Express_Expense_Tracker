const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'delTRANSACTION':
            transactions = state.filter((ele) => ele.id === action.payload)
            return transactions;
        case 'addTRANSACTION':
            transactions = [action.payload, ...state]
            return transactions;
        default:
            return state;
    }

}

export default contextReducer;