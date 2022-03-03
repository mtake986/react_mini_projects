import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ({ t }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = t.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={t.amount < 0 ? 'minus' : 'plus'}>
        {t.text}
        <span>
          {sign}${Math.abs(t.amount)}
        </span>
        <button onClick={() => deleteTransaction(t.id)} className='delete-btn'>x</button>
      </li>
    </div>
  );
};

// export default Transaction
