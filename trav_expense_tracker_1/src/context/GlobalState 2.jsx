import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// InitialState
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  // Actions
  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// ? what the provider does is that it provides our state, any actions and stuff like that to the components. So, we need to wrap all of the components with the provider (Ex. GlobalContext.Provider). Props, children in this case, are all of the components inside the Provider such as Balance.jsx, IncomeExpenses.jsx, and so on.

// ? what does this value={{ transactions: state.transactions }} do?? it's basically passing the values in initialState and enable us to access it by "transactions".

// ? After importing it into App.js, go and see omponents in developer tool on a browser. If you look in reducer, you have our transsactions array so this is now accessible to any components that need it such as TransactionList.jsx, Balance.jsx
