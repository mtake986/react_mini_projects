import React from 'react'
import GlobalContext from '../context/GlobalState'

const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$100</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList