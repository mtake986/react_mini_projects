import React from 'react'

function CurrencyRow(props) {
  const { options, selectCurrency, onChangeCurrency, amount, onChangeAmount } = props
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select calue={selectCurrency} onChange={onChangeCurrency}>
        {options.map((o) => { 
          <option key={o} value={o}>{o}</option>
        })}
      </select>
    </div>
  )
}

export default CurrencyRow