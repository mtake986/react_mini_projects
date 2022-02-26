import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)
  
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(t => (
          <Transaction key={t.id} t={t} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
