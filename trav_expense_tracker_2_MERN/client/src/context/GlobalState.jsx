import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { axios } from 'axios';

// InitialState
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: "TRANSACTION_ERROR",
      //   payload: err.response.data.error
      // })
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  const addTransaction = async transaction => {
    const config = {
      headers: {
        "Counter-Type": "application/json"
      }
    }
    try {
      const res = await axios.post("/transactions", transaction, config)
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }

  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// ? what the provider does is that it provides our state, any actions and stuff like that to the components. So, we need to wrap all of the components with the provider (Ex. GlobalContext.Provider). Props, children in this case, are all of the components inside the Provider such as Balance.jsx, IncomeExpenses.jsx, and so on.

// ? what does this value={{ transactions: state.transactions }} do?? it's basically passing the values in initialState and enable us to access it by "transactions".

// ? After importing it into App.js, go and see omponents in developer tool on a browser. If you look in reducer, you have our transsactions array so this is now accessible to any components that need it such as TransactionList.jsx, Balance.jsx
