import React, {useEffect, useState} from 'react'
import CurrencyRow from './CurrencyRow'

const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {
  const [options, setOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFrom, setAmountInFrom] = useState(true)

  let toAmount, fromAmount
  if (amountInFrom) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
      .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    if (fromCurrency != null && toCurrency !=null) {
      fetch(`${BASE_URL}?base${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])


  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFrom(true)
  }
  const handleToAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFrom(false)
  }
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow 
        options={options}
        selectCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equal">↕ </div>
      <CurrencyRow 
        options={options}
        selectCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  )
}

export default App