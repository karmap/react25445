import React, { useState, useContext } from "react"

export const CounterContext = React.createContext({
  count: 0,
  add: () => {},
  sub: () => {}
})

export const useCounter = () => {
  return useContext(CounterContext)
}

export const CounterContextProvider = ( {children} ) => {

  const [counter, setCounter] = useState(0)

  const addCounter = ( num = 1 ) => {
    setCounter(counter + num)
  }

  const subCounter = ( num = 1 ) => {
    setCounter(counter - num)
  }

  const context = {
    count: counter,
    add: addCounter,
    sub: subCounter
  }

  return (
    <CounterContext.Provider value={context}>
        {children}
    </CounterContext.Provider>
  )
}