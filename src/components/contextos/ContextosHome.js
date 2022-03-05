import { useState } from "react"
import CounterContainer from "./CounterContainer"

import CounterContext from "./context/counterContext"

const ContextosHome = () => {

  const [counter, setCounter] = useState(0)

  const addHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <CounterContext.Provider value={counter}>
      <div>ContextosHome</div>
      <h1>{counter}</h1>
      <button onClick={addHandler}>Aumenta contador</button>

      <CounterContainer></CounterContainer>
    </CounterContext.Provider>
  )
}
export default ContextosHome