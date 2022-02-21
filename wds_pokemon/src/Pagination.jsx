import React from 'react'

function Pagination({n, p}) {
  // var prevDisabled = "abled"
  // var nextDisabled = "abled"
  // if (p === null) {
  //   prevDisabled = true
  // }
  // if (n === null) {
  //   prevDisabled = true
  // }
  // return (
  //   <div>
  //     <button {prevDisabled ? "disabled" : "abled"} onClick={p}>Prev</button>
  //     <button onClick={n}>Next</button>
  //   </div>
  // )
  return (
  <div>
    {p && <button onClick={p}>Prev</button>}
    {n && <button onClick={n}>Next</button>}
  </div>
  )
}

export default Pagination