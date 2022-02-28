export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state, 
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

// ? reducer is just a way to change my state and send it down to me component
