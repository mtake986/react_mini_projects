import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  // todo: Generate id, use uuid
  const generateId = () => {
    const letters = "1234567890qwertyuiopasdfghjklzxcvbnm!#$%&="
    const idLength = Math.floor(Math.random() * 10 + 10) // 10 to 19
    var id = "";
    for (let i = 0; i < idLength; i++) {
      var index = Math.floor(Math.random() * letters.length) 
      id += letters[index]
    }
    return id
  }
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: generateId(), 
      text, 
      amount: +amount
    }

    addTransaction(newTransaction)
    setText("")
    setAmount('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
