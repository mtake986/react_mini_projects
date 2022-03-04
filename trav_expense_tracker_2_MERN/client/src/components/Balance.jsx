import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {numberWithCommas} from '../utils/format'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(`amounts => ${amounts}, total => ${total}`);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
