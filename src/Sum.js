import axios from "axios"
import { useState } from "react"

function Sum() {
  const [total, setTotal] = useState(null)
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const baseURL = "http://localhost:3000"
  function getSum() {
    axios
      .put(`${baseURL}/sums`, {
        firstNumber: 2,
        lastNumber: 3,
      })
      .then((response) => {
        setTotal(response.data.total)
      })
  }
  return (
    <div>
      <div>First Number: </div>
      <input type="number" />
      <div> Second Number: </div>
      <input type="number" />
      <button onClick={getSum}>Submit</button>
      <div>Total: {total}</div>
    </div>
  )
}

export default Sum
